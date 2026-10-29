import { isPendingPublication, nowMs } from "./publish-at.js";

export function applyNightOverlays(nights, overlays, now = nowMs()) {
  const copy = structuredClone(nights);
  const clock = nowMs(now);
  for (const overlay of overlays || []) {
    if (isPendingPublication({ publishAt: overlay.publishAt }, clock)) continue;
    const night = copy.find((item) => item.date === overlay.date);
    if (!night) continue;
    if (overlay.updated) night.updated = overlay.updated;
    const game = (night.games || []).find((item) => item.matchup === overlay.matchup);
    if (!game) continue;
    if (overlay.away) game.away = overlay.away;
    if (overlay.home) game.home = overlay.home;
  }
  return copy;
}
