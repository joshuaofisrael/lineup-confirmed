import assert from "node:assert/strict";
import { test } from "node:test";
import { buildEngagementReads, splitAfterParagraph } from "../lib/related-reads.js";

function post(slug, date, tags, category = "NHL Starting Goalies") {
  return {
    url: `/articles/${slug}/`,
    data: { date, tags, category, title: slug, summary: slug },
  };
}

test("splitAfterParagraph keeps a blockquote intact and cuts after the second top-level paragraph", () => {
  const html = "<p>One</p>\n<blockquote><p>Quoted</p></blockquote>\n<p>Two</p>\n<p>Three</p>";
  const parts = splitAfterParagraph(html, 2);
  assert.match(parts.before, /<p>Two<\/p>$/);
  assert.match(parts.after, /^<p>Three<\/p>/);
  assert.match(parts.before, /Quoted/);
});

test("splitAfterParagraph does not cut a short story", () => {
  const html = "<p>One</p><p>Two</p>";
  const parts = splitAfterParagraph(html, 2);
  assert.equal(parts.after, "");
  assert.equal(parts.before, html);
});

test("engagement reads prefer shared tags, later follow-ups, and an explainer for background", () => {
  const current = post("wild-win", "2026-11-07", ["Wild", "Quinn Hughes", "nhl"]);
  const posts = [
    current,
    post("how-nhl-starting-goalies-get-confirmed", "2026-10-30", ["starting goalies", "explainer"]),
    post("nhl-morning-skate-explained-starting-goalie", "2026-10-31", ["morning skate", "starting goalies"]),
    post("nhl-delayed-penalty", "2026-11-11", ["penalty"]),
    post("guerin-hughes", "2026-11-12", ["Wild", "Quinn Hughes"]),
    post("older-wild", "2026-10-25", ["Wild", "Calvin Pickard"]),
    post("unrelated", "2026-11-19", ["Flyers", "Joseph Woll"]),
    post("mcdavid-streak", "2026-11-08", ["Oilers", "milestones"]),
    post("sabres-roundup", "2026-11-15", ["Sabres", "Blackhawks", "Connor Bedard", "Jeff Blashill", "Bowen Byram", "Patrick Kane"]),
  ];
  const reads = buildEngagementReads(posts, {
    url: current.url,
    category: "NHL Starting Goalies",
    tags: current.data.tags,
    date: current.data.date,
  });
  assert.equal(reads.followUps.map((item) => item.url).includes("/articles/mcdavid-streak/"), false);
  assert.equal(reads.followUps.map((item) => item.url).includes("/articles/sabres-roundup/"), false);
  assert.equal(reads.followUps[0].url, "/articles/guerin-hughes/");
  assert.ok(reads.background.some((item) => item.url.includes("how-nhl-starting-goalies")));
  assert.equal(
    reads.background.some((item) => item.url.includes("nhl-delayed-penalty")),
    false,
  );
  assert.ok(reads.mid.length >= 3 && reads.mid.length <= 4);
  const end = new Set([
    ...reads.followUps.map((item) => item.url),
    ...reads.background.map((item) => item.url),
    ...reads.more.map((item) => item.url),
  ]);
  assert.ok(end.size >= 3 && end.size <= 4);
});
