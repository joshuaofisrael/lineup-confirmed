// Sports dates are US Eastern (America/New_York) calendar dates, "YYYY-MM-DD".
export function sportsDateET(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(now);
}
export function labelForDate(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date(Date.UTC(y, m - 1, d)));
}
// nights: newest first. Returns the board to show plus whether it is today's.
export function selectBoard(nights, now = new Date()) {
  const today = sportsDateET(now);
  const night = nights.find((n) => n.date <= today) || nights[nights.length - 1];
  return { night, today, todayLabel: labelForDate(today), isCurrent: !!night && night.date === today, stale: !!night && night.date < today };
}
