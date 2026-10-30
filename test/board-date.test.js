import test from "node:test";
import assert from "node:assert/strict";
import { selectBoard, sportsDateET } from "../lib/sports-date.js";
import nhlNights from "../src/_data/nhlNights.js";

const nights = [{ date: "2026-10-29" }, { date: "2026-10-28" }];
test("ET sports date, not UTC", () => {
  assert.equal(sportsDateET(new Date("2026-10-30T03:00:00Z")), "2026-10-29");
  assert.equal(sportsDateET(new Date("2026-10-30T10:35:00Z")), "2026-10-30");
});
test("current board when today's exists", () => {
  const s = selectBoard(nights, new Date("2026-10-29T18:00:00Z"));
  assert.equal(s.isCurrent, true); assert.equal(s.stale, false);
});
test("stale board flagged when no board for today's ET date", () => {
  const s = selectBoard(nights, new Date("2026-10-30T15:00:00Z"));
  assert.equal(s.night.date, "2026-10-29"); assert.equal(s.isCurrent, false); assert.equal(s.stale, true);
});
test("nights are unique and newest first", () => {
  const d = nhlNights.map((n) => n.date);
  assert.deepEqual([...d].sort().reverse(), d); assert.equal(new Set(d).size, d.length);
});
test("no cross-game future-tense notes", () => {
  for (const n of nhlNights) for (const g of n.games || []) for (const side of [g.away, g.home]) {
    if (!side) continue;
    assert.doesNotMatch(side.note, /play (Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday) .* first;/, `${n.date} ${g.matchup}`);
  }
});
