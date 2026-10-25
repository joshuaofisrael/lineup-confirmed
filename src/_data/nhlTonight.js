import nhlNights from "./nhlNights.js";

// Pick the board for the current hockey night (US Eastern date at build time),
// or the newest night already started. Lets us publish tomorrow's board early.
export default function () {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
  return nhlNights.find((n) => n.date <= today) || nhlNights[nhlNights.length - 1];
}
