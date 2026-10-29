import { coerceDate } from "./dates.js";

// A post goes out on the next site build after publishAt. GitHub Pages does not
// rebuild itself, so the scheduled workflow has to deploy inside this window.
export const SCHEDULE_WINDOW_MS = 75 * 60 * 1000;

export function nowMs(now) {
  if (now instanceof Date && !Number.isNaN(now.getTime())) return now.getTime();
  if (typeof now === "number" && !Number.isNaN(now)) return now;
  if (typeof now === "string" && now.trim()) {
    const parsed = Date.parse(now);
    if (!Number.isNaN(parsed)) return parsed;
  }
  if (process.env.PUBLISH_CLOCK) {
    const parsed = Date.parse(process.env.PUBLISH_CLOCK);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return Date.now();
}

export function publishAtTime(data) {
  if (!data || data.publishAt == null || String(data.publishAt).trim() === "") return null;
  return coerceDate(data.publishAt);
}

export function isPendingPublication(data, now = nowMs()) {
  const when = publishAtTime(data);
  if (!when) return false;
  return when.getTime() > nowMs(now);
}

export function isDuePublication(data, now = nowMs(), windowMs = SCHEDULE_WINDOW_MS) {
  const when = publishAtTime(data);
  if (!when) return false;
  const age = nowMs(now) - when.getTime();
  return age >= 0 && age <= windowMs;
}
