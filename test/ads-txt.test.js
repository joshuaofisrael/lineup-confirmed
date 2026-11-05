import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import site from "../src/_data/site.js";

const PUBLISHER_LINE = "google.com, pub-5681559774142917, DIRECT, f08c47fec0942fa0";

test("ads.txt is the AdSense publisher line and robots names Mediapartners-Google", () => {
  const ads = fs.readFileSync(new URL("../src/ads.txt.njk", import.meta.url), "utf8");
  const body = ads.replace(/^---[\s\S]*?---\n/, "");
  assert.equal(body.trim(), PUBLISHER_LINE);
  assert.match(ads, /permalink:\s*\/ads\.txt/);
  assert.ok(site.crawlers.includes("Mediapartners-Google"));
  const privacy = fs.readFileSync(new URL("../src/privacy.njk", import.meta.url), "utf8");
  assert.match(privacy, /Google AdSense/);
  assert.match(privacy, /third-party vendors/);
  assert.match(privacy, /https:\/\/adssettings\.google\.com/);
  const footer = fs.readFileSync(new URL("../src/_includes/partials/footer.njk", import.meta.url), "utf8");
  for (const href of ["/about/", "/contact/", "/privacy/", "/terms/", "/ad-disclosure/"]) {
    assert.match(footer, new RegExp(href.replaceAll("/", "\\/")));
  }
});
