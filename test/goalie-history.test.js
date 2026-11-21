import assert from "node:assert/strict";
import { test } from "node:test";
import nights from "../src/_data/nhlNights.js";
import { buildGoalieHistory, isLeagueOrClubUrl } from "../lib/goalie-history.js";

test("league and club hosts are the only sources that qualify", () => {
  assert.equal(isLeagueOrClubUrl("https://www.nhl.com/gamecenter/cgy-vs-edm/2026/10/28/2026020200"), true);
  assert.equal(isLeagueOrClubUrl("https://api-web.nhle.com/v1/gamecenter/2026020200/boxscore"), true);
  assert.equal(isLeagueOrClubUrl("https://www.nhl.com/bluejackets/news/example"), true);
  assert.equal(isLeagueOrClubUrl("https://x.com/SWhyno/status/1"), false);
  assert.equal(isLeagueOrClubUrl("https://www.mlive.com/redwings/story"), false);
  assert.equal(isLeagueOrClubUrl("https://thehockeynews.com/nhl/minnesota-wild/game-day/plan"), false);
});

test("the nightly board becomes a confirmed, sourced file", () => {
  const history = buildGoalieHistory(nights);
  assert.ok(history.rows.length > 40, `expected a full slate, got ${history.rows.length}`);
  assert.ok(history.confirmedNonPrimary > 0);
  for (const row of history.rows) {
    assert.equal(row.status, "confirmed");
    assert.equal(isLeagueOrClubUrl(row.sourceUrl), true);
    assert.notEqual(row.goalie, "Not announced");
    assert.ok(row.sourceName);
    assert.equal(Object.hasOwn(row, "saves"), false);
  }

  const jarry = history.rows.find(
    (row) => row.date === "2026-10-28" && row.team === "Oilers" && row.goalie === "Tristan Jarry",
  );
  assert.ok(jarry);
  assert.match(jarry.sourceUrl, /2026020200/);

  const tomkins = history.rows.find((row) => row.date === "2026-11-01" && row.goalie === "Matt Tomkins");
  assert.equal(tomkins, undefined);

  assert.match(history.csv, /^date,matchup,time_et,side,team,goalie,status,source_name,source_url,board_updated\n/);
  assert.match(history.csv, /Tristan Jarry,confirmed,/);
  assert.doesNotMatch(history.csv, /,saves,/);
  assert.doesNotMatch(history.csv, /x\.com/);
  assert.equal(history.coverageStart, "2026-10-25");
  assert.equal(history.coverageEnd, "2026-10-31");
  assert.equal(history.boardStart, "2026-10-25");
  assert.equal(history.boardEnd, "2026-11-02");
  const november = history.rows.filter((row) => row.date >= "2026-11-01");
  assert.equal(november.length, 0);
});
