import assert from "node:assert/strict";
import { test } from "node:test";
import site from "../src/_data/site.js";
import { buildGraph, renderBreadcrumbNav } from "../lib/structured-data.js";

test("NewsArticle publisher is the brand and breadcrumbs escape text", () => {
  const graph = buildGraph(
    {
      kind: "article",
      title: "A sourced headline",
      summary: "A dek.",
      category: "NHL Starting Goalies",
      tags: ["range"],
      updatedAt: "2026-10-23",
      page: { url: "/articles/example/", date: new Date("2026-10-22T00:00:00Z") },
    },
    site,
  );
  const article = graph["@graph"].find((node) => node["@type"] === "NewsArticle");
  const crumbs = graph["@graph"].find((node) => node["@type"] === "BreadcrumbList");
  assert.equal(article.publisher["@type"], "Organization");
  assert.equal(article.publisher.name, "Lineup Confirmed");
  assert.equal(article.author.name, "Staff Desk");
  assert.equal(article.dateModified, "2026-10-23T00:00:00.000Z");
  assert.match(
    graph["@graph"].find((node) => node["@type"] === "NewsMediaOrganization").publishingPrinciples,
    /\/sources-ethics\/$/,
  );
  assert.equal(crumbs.itemListElement[0].name, "Home");
  assert.equal(crumbs.itemListElement[1].name, "NHL Starting Goalies");

  const home = buildGraph({ title: site.name, page: { url: "/" } }, site);
  assert.equal(
    home["@graph"].some((node) => node["@type"] === "NewsArticle"),
    false,
  );
  assert.ok(home["@graph"].some((node) => node["@type"] === "BreadcrumbList"));

  const html = renderBreadcrumbNav([
    { name: "Home", url: "https://example.com/" },
    { name: "<script>", url: "https://example.com/x/" },
  ]);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
});
