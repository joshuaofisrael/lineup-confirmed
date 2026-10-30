import nhlNights from "./nhlNights.js";
import { selectBoard } from "../../lib/sports-date.js";

// Board for the current hockey night by explicit America/New_York sports date at build time.
// If no board exists for today's ET date, the latest earlier board is flagged stale and shown
// as previous-day information. Client JS (assets/js/board-date.js) re-checks in the browser.
export default function () {
  const sel = selectBoard(nhlNights);
  if (sel.stale) console.warn(`[nhlTonight] WARNING: no NHL board for ET date ${sel.today}; showing ${sel.night.date} as previous-day info.`);
  return sel;
}
