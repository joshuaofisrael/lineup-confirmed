// One entry per night. Newest first. Each goalie entry: status is "confirmed", "expected" or "unconfirmed".
// Every status must link the team, league or reporter source it relies on. Never guess.
const NHL_PREVIEW = (slug) => `https://www.nhl.com/news/${slug}-game-preview-october-25-2026`;
export default [
  {
    date: "2026-10-25",
    label: "Sunday, October 25, 2026",
    updated: "2026-10-25T11:00:00Z",
    games: [
      {
        matchup: "Florida Panthers at Chicago Blackhawks", time: "3 p.m. ET",
        away: { team: "Panthers", goalie: "Akira Schmid", status: "confirmed", note: "Team preview says Schmid will start after Cooper Black made 18 saves in his NHL debut Thursday. Jacob Markstrom is injured (upper body).", source: { name: "FloridaPanthers.com (Jameson Olive)", url: "https://www.nhl.com/panthers/news/preview-panthers-try-to-pick-up-first-win-of-road-trip-in-chicago" } },
        home: { team: "Blackhawks", goalie: "Arvid Soderblom", status: "expected", note: "Listed first in goal in NHL.com's projected lineup; NHL.com says Soderblom could play after Knight started the past five games.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("florida-panthers-chicago-blackhawks") } },
      },
      {
        matchup: "New York Islanders at Dallas Stars", time: "6 p.m. ET",
        away: { team: "Islanders", goalie: "Semyon Varlamov", status: "expected", note: "Listed first in goal in NHL.com's projected lineup, ahead of Ilya Sorokin.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("new-york-islanders-dallas-stars") } },
        home: { team: "Stars", goalie: "Jake Oettinger", status: "expected", note: "Listed first in goal in NHL.com's projected lineup, with Casey DeSmith as backup.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("new-york-islanders-dallas-stars") } },
      },
      {
        matchup: "Montreal Canadiens at Winnipeg Jets (Heritage Classic)", time: "7 p.m. ET",
        away: { team: "Canadiens", goalie: "Not announced", status: "unconfirmed", note: "No starter announced in sources we could verify. Sam Montembeault is on injured reserve.", source: { name: "NHL.com Heritage Classic preview", url: "https://www.nhl.com/news/winnipeg-jets-montreal-canadiens-face-off-in-heritage-classic-seeking-important-two-points" } },
        home: { team: "Jets", goalie: "Stuart Skinner or Clay Stevenson", status: "unconfirmed", note: "NHL.com: the Jets have two NHL goalies, Skinner and Stevenson, after trading Connor Hellebuyck; Nico Daws likely scratched.", source: { name: "NHL.com (Shawn P. Roarke)", url: "https://www.nhl.com/news/winnipeg-jets-will-reset-after-connor-hellebuyck-traded-to-new-jersey-devils" } },
      },
      {
        matchup: "Colorado Avalanche at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Avalanche", goalie: "Not announced", status: "unconfirmed", note: "No team or beat-reporter confirmation found yet.", source: { name: "NHL.com schedule", url: "https://www.nhl.com/schedule/2026-10-25" } },
        home: { team: "Predators", goalie: "Not announced", status: "unconfirmed", note: "Second half of a back-to-back; no confirmation found yet.", source: { name: "NHL.com schedule", url: "https://www.nhl.com/schedule/2026-10-25" } },
      },
      {
        matchup: "Minnesota Wild at Vancouver Canucks", time: "10 p.m. ET",
        away: { team: "Wild", goalie: "Not announced", status: "unconfirmed", note: "Minnesota played Saturday; no confirmation found yet.", source: { name: "NHL.com schedule", url: "https://www.nhl.com/schedule/2026-10-25" } },
        home: { team: "Canucks", goalie: "Not announced", status: "unconfirmed", note: "No confirmation found yet.", source: { name: "NHL.com schedule", url: "https://www.nhl.com/schedule/2026-10-25" } },
      },
    ],
  },
];
