import { normalizeSiteUrl } from "../../lib/site-url.js";

const site = {
  name: "Lineup Confirmed",
  tagline: "Who's starting today, sourced and labeled.",
  brandLine: "Starting goalies, probable pitchers and game-day lineups, each marked expected or confirmed with its source.",
  description:
    "Lineup Confirmed tracks who is starting today across sports: NHL starting goalies, MLB probable pitchers and closers, NBA injury status, Premier League lineups and NFL starting quarterbacks. Every starter is labeled expected or confirmed and linked to its source.",
  // Public origin, no trailing slash. The CNAME file must use this hostname.
  url: normalizeSiteUrl("https://lineupconfirmed.com"),
  locale: "en_US",
  language: "en",
  author: "Staff Desk",
  operator: "Joshua Israel Ventures LLC",
  legalLine: "© 2026 Joshua Israel Ventures LLC. All rights reserved. Lineup Confirmed is a trade name of Joshua Israel Ventures LLC, a Florida limited liability company.",
  jurisdiction: "Florida",
  entityDescription: "a Florida limited liability company",
  contactEmail: "desk@example.com",
  // Activated FormSubmit alias alias (shared with sibling sites). This keeps the inbox address out of the built pages.
  contactFormEndpoint: "https://formsubmit.co/4497ee41a1200e746e967998473d21da",
  indexNowKey: "c3f8a91d2b7e4c6f9a0d5e8b1f2a7c40",
  // Cookieless Cloudflare Web Analytics. The base layout prints the beacon.
  cloudflareAnalyticsToken: "CF_BEACON_TOKEN_PLACEHOLDER",
  adsenseClient: "",
  year: new Date().getUTCFullYear(),
  buildTime: new Date().toISOString(),
  crawlers: [
    "Googlebot",
    "Bingbot",
    "OAI-SearchBot",
    "GPTBot",
    "PerplexityBot",
    "ClaudeBot",
    "CCBot",
    "Google-Extended",
    "Applebot-Extended",
    "Bytespider",
  ],
  categories: [
    { name: "NHL Starting Goalies", slug: "nhl-starting-goalies", path: "/nhl/starting-goalies/", season: "October to June", inSeason: true, description: "Tonight's NHL starters, game by game, marked expected or confirmed with the team or reporter source." },
    { name: "NBA Injury Status", slug: "nba-injury-status", path: "/nba/injury-status/", season: "October to June", inSeason: true, description: "Who is in, out or questionable tonight, from official team and league reports." },
    { name: "Premier League Lineups", slug: "epl-lineups", path: "/soccer/premier-league-lineups/", season: "August to May", inSeason: true, description: "Confirmed Premier League starting elevens, published when clubs release them." },
    { name: "NFL Starting QBs", slug: "nfl-starting-qbs", path: "/nfl/starting-qbs/", season: "September to February", inSeason: true, description: "Quarterback starts, benchings and injuries. News only, no fantasy advice." },
    { name: "MLB Probable Pitchers", slug: "mlb-probable-pitchers", path: "/mlb/probable-pitchers/", season: "March to October", inSeason: false, description: "Probable starting pitchers for every game, from club announcements." },
    { name: "MLB Closers", slug: "mlb-closers", path: "/mlb/closers/", season: "March to October", inSeason: false, description: "Closer and bullpen role changes, sourced to managers and team reporters." },
  ],
};

export default site;
