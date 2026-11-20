import { coerceDate } from "./dates.js";

const GENERIC_TAGS = new Set([
  "post",
  "nhl",
  "team news",
  "international football",
  "predicted lineup",
  "confirmed lineup",
  "explainer",
  "nhl rules",
  "milestones",
]);

const TOPIC_TAGS = new Set(["waivers", "trade deadline", "morning skate"]);

const EXPLAINER_SLUGS = new Set([
  "how-nhl-starting-goalies-get-confirmed",
  "nhl-morning-skate-explained-starting-goalie",
  "nhl-back-to-back-starting-goalie-what-we-confirm",
  "nhl-emergency-backup-goalie-ebug-rule-explained",
  "nhl-injured-reserve",
  "nhl-delayed-penalty",
]);

function timeOf(post) {
  const raw = post?.data?.publishAt || post?.data?.date || post?.date;
  const when = coerceDate(raw);
  return when ? when.getTime() : 0;
}

export function slugOf(post) {
  const url = String(post?.url || "");
  const match = url.match(/\/articles\/([^/]+)\/?$/);
  return match ? match[1] : "";
}

export function specificTags(tags) {
  const out = new Set();
  for (const tag of tags || []) {
    if (typeof tag !== "string") continue;
    const value = tag.trim().toLowerCase();
    if (!value || GENERIC_TAGS.has(value)) continue;
    out.add(value);
  }
  return out;
}

function sharedCount(left, right) {
  let count = 0;
  for (const tag of left) if (right.has(tag)) count += 1;
  return count;
}

function isStrongTag(tag) {
  return tag.includes(" ") || tag.includes("-") || TOPIC_TAGS.has(tag);
}

// A later story counts as a follow-up when it shares a player, a topic, or one
// team on a focused story. A single team name on a multi-subject roundup does not.
export function relationScore(currentTags, post) {
  const other = specificTags(post?.data?.tags);
  const shared = [...currentTags].filter((tag) => other.has(tag));
  if (!shared.length) return 0;
  const strong = shared.filter(isStrongTag).length;
  const teams = shared.length - strong;
  let score = strong * 20 + teams * 8;
  if (other.size >= 5) score -= 10;
  if (other.size >= 8) score -= 20;
  return score;
}

function explainerScore(slug, tags) {
  const list = [...tags];
  if (slug === "how-nhl-starting-goalies-get-confirmed") return 2;
  if (slug === "nhl-morning-skate-explained-starting-goalie") return 1;
  if (
    slug === "nhl-back-to-back-starting-goalie-what-we-confirm" &&
    list.some((tag) => tag.includes("back-to-back") || tag.includes("back to back"))
  ) {
    return 5;
  }
  if (
    slug === "nhl-injured-reserve" &&
    list.some((tag) => tag === "ir" || tag.includes("injur") || tag.includes("reserve"))
  ) {
    return 5;
  }
  if (slug === "nhl-delayed-penalty" && list.some((tag) => tag.includes("penalty"))) return 5;
  if (
    slug === "nhl-emergency-backup-goalie-ebug-rule-explained" &&
    list.some((tag) => tag.includes("ebug") || tag.includes("emergency"))
  ) {
    return 5;
  }
  return 0;
}

function byNewest(a, b) {
  return timeOf(b) - timeOf(a);
}

function dedupe(posts) {
  const seen = new Set();
  const out = [];
  for (const post of posts) {
    if (!post?.url || seen.has(post.url)) continue;
    seen.add(post.url);
    out.push(post);
  }
  return out;
}

export function splitAfterParagraph(html, count = 2) {
  const text = String(html || "");
  const re = /<\/?(blockquote|ul|ol|table|p)\b[^>]*>/gi;
  let depth = 0;
  let seen = 0;
  let match;
  while ((match = re.exec(text))) {
    const tag = match[1].toLowerCase();
    const closing = match[0].startsWith("</");
    if (tag === "p") {
      if (closing && depth === 0) {
        seen += 1;
        if (seen === count) {
          const cut = match.index + match[0].length;
          const after = text.slice(cut).trim();
          if (!after) return { before: text, after: "" };
          return { before: text.slice(0, cut), after };
        }
      }
    } else if (!closing) depth += 1;
    else depth = Math.max(0, depth - 1);
  }
  return { before: text, after: "" };
}

export function buildEngagementReads(posts, { url, category, tags, date } = {}) {
  const currentTags = specificTags(tags);
  const currentTime = timeOf({ data: { date }, date });
  const others = (posts || []).filter((post) => post?.url && post.url !== url);

  const ranked = others
    .map((post) => ({ post, score: relationScore(currentTags, post) }))
    .filter((item) => item.score >= 8)
    .sort((a, b) => b.score - a.score || byNewest(a.post, b.post))
    .map((item) => item.post);

  const mid = ranked.slice(0, 4);

  const followUps = others
    .filter((post) => currentTime > 0 && timeOf(post) > currentTime && relationScore(currentTags, post) >= 8)
    .sort((a, b) => relationScore(currentTags, b) - relationScore(currentTags, a) || byNewest(a, b))
    .slice(0, 2);

  const skip = new Set(followUps.map((post) => post.url));
  const background = [];
  if (category === "NHL Starting Goalies") {
    const explainers = others
      .filter((post) => EXPLAINER_SLUGS.has(slugOf(post)) && !skip.has(post.url))
      .map((post) => ({
        post,
        score:
          explainerScore(slugOf(post), currentTags) +
          sharedCount(currentTags, specificTags(post.data?.tags)),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || byNewest(a.post, b.post));
    if (explainers[0]) background.push(explainers[0].post);
  }

  const older = others
    .filter((post) => {
      if (skip.has(post.url) || background.some((item) => item.url === post.url)) return false;
      if (EXPLAINER_SLUGS.has(slugOf(post))) return false;
      if (!(currentTime > 0) || !(timeOf(post) > 0) || timeOf(post) >= currentTime) return false;
      return relationScore(currentTags, post) >= 8;
    })
    .sort((a, b) => relationScore(currentTags, b) - relationScore(currentTags, a) || byNewest(a, b));
  if (older[0]) background.push(older[0]);

  if (background.length < 2 && category === "NHL Starting Goalies") {
    const second = others
      .filter((post) => EXPLAINER_SLUGS.has(slugOf(post)) && !skip.has(post.url))
      .filter((post) => !background.some((item) => item.url === post.url))
      .map((post) => ({
        post,
        score:
          explainerScore(slugOf(post), currentTags) +
          sharedCount(currentTags, specificTags(post.data?.tags)),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || byNewest(a.post, b.post));
    if (second[0]) background.push(second[0].post);
  }

  const end = dedupe([...followUps, ...background]);
  const used = new Set(end.map((post) => post.url));
  const more = [];
  const explainers = others
    .filter((post) => EXPLAINER_SLUGS.has(slugOf(post)) && explainerScore(slugOf(post), currentTags) > 0)
    .sort((a, b) => explainerScore(slugOf(b), currentTags) - explainerScore(slugOf(a), currentTags));
  for (const post of [...mid, ...explainers]) {
    if (end.length + more.length >= 3) break;
    if (used.has(post.url)) continue;
    more.push(post);
    used.add(post.url);
  }
  if (category === "NHL Starting Goalies") {
    for (const post of explainers) {
      if (mid.length >= 3) break;
      if (mid.some((item) => item.url === post.url)) continue;
      mid.push(post);
    }
  }

  return {
    mid: mid.slice(0, 4),
    followUps,
    background: background.slice(0, 2),
    more,
  };
}
