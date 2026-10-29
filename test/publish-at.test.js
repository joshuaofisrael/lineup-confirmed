import assert from "node:assert/strict";
import { test } from "node:test";
import { applyNightOverlays } from "../lib/night-overlays.js";
import { isDuePublication, isPendingPublication } from "../lib/publish-at.js";

const before = Date.parse("2026-10-29T10:00:00Z");
const atEleven = Date.parse("2026-10-29T11:05:00Z");
const atThree = Date.parse("2026-10-29T15:05:00Z");
const atSeven = Date.parse("2026-10-29T19:05:00Z");

test("publishAt holds a story until the clock passes it", () => {
  const story = { publishAt: "2026-10-29T15:00:00Z" };
  assert.equal(isPendingPublication(story, before), true);
  assert.equal(isPendingPublication(story, atEleven), true);
  assert.equal(isPendingPublication(story, atThree), false);
  assert.equal(isPendingPublication({ title: "No schedule" }, before), false);
});

test("the deploy window opens at publishAt and closes 75 minutes later", () => {
  const story = { publishAt: "2026-10-29T11:00:00Z" };
  assert.equal(isDuePublication(story, before), false);
  assert.equal(isDuePublication(story, atEleven), true);
  assert.equal(isDuePublication(story, Date.parse("2026-10-29T12:05:00Z")), true);
  assert.equal(isDuePublication(story, atThree), false);
});

test("goalie-board overlays follow the same clock as the articles", () => {
  const nights = [
    {
      date: "2026-10-29",
      updated: "2026-10-27T21:45:00Z",
      games: [
        {
          matchup: "Montreal Canadiens at Dallas Stars",
          away: { team: "Canadiens", goalie: "Not announced", status: "unconfirmed" },
          home: { team: "Stars", goalie: "Not announced", status: "unconfirmed" },
        },
      ],
    },
  ];
  const overlays = [
    {
      publishAt: "2026-10-29T15:00:00Z",
      date: "2026-10-29",
      updated: "2026-10-29T15:00:00Z",
      matchup: "Montreal Canadiens at Dallas Stars",
      away: { team: "Canadiens", goalie: "Jakub Dobes", status: "confirmed" },
    },
  ];

  const early = applyNightOverlays(nights, overlays, atEleven);
  assert.equal(early[0].games[0].away.goalie, "Not announced");
  assert.equal(early[0].updated, "2026-10-27T21:45:00Z");

  const later = applyNightOverlays(nights, overlays, atThree);
  assert.equal(later[0].games[0].away.goalie, "Jakub Dobes");
  assert.equal(later[0].games[0].home.goalie, "Not announced");
  assert.equal(later[0].updated, "2026-10-29T15:00:00Z");
  assert.equal(isPendingPublication({ publishAt: "2026-10-29T19:00:00Z" }, atSeven), false);
});
