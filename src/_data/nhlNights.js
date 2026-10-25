// One entry per night. Newest first. Each goalie entry: status is "confirmed", "expected" or "unconfirmed".
// Every status must link the team, league or reporter source it relies on. Never guess.
const GC = (path) => `https://www.nhl.com/gamecenter/${path}`;
const NHL_PREVIEW = (slug) => `https://www.nhl.com/news/${slug}-game-preview-october-25-2026`;
export default [
  {
    date: "2026-10-26",
    label: "Monday, October 26, 2026",
    updated: "2026-10-25T15:10:00Z",
    games: [
      {
        matchup: "Los Angeles Kings at New York Rangers", time: "7 p.m. ET",
        away: { team: "Kings", goalie: "Not announced", status: "unconfirmed", note: "Anton Forsberg started Saturday at New Jersey (23 saves on 25); Darcy Kuemper started Thursday at the Islanders (41 saves on 43).", source: { name: "NHL.com GameCenter (Kings at Devils, Oct. 24)", url: GC("lak-vs-njd/2026/10/24/2026020169") } },
        home: { team: "Rangers", goalie: "Not announced", status: "unconfirmed", note: "Dylan Garand started Saturday at Ottawa (17 saves on 22). No starter announced for Monday.", source: { name: "NHL.com GameCenter (Rangers at Senators, Oct. 24)", url: GC("nyr-vs-ott/2026/10/24/2026020171") } },
      },
      {
        matchup: "Toronto Maple Leafs at Calgary Flames", time: "8:30 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Not announced", status: "unconfirmed", note: "Anthony Stolarz started Saturday's 7-2 win at Edmonton (30 saves on 32).", source: { name: "NHL.com GameCenter (Maple Leafs at Oilers, Oct. 24)", url: GC("tor-vs-edm/2026/10/24/2026020176") } },
        home: { team: "Flames", goalie: "Not announced", status: "unconfirmed", note: "Devin Cooley started Saturday's 4-1 win over Detroit (28 saves on 29).", source: { name: "NHL.com GameCenter (Red Wings at Flames, Oct. 24)", url: GC("det-vs-cgy/2026/10/24/2026020178") } },
      },
      {
        matchup: "Detroit Red Wings at Edmonton Oilers", time: "9:30 p.m. ET",
        away: { team: "Red Wings", goalie: "Not announced", status: "unconfirmed", note: "John Gibson started Saturday at Calgary (21 saves on 25).", source: { name: "NHL.com GameCenter (Red Wings at Flames, Oct. 24)", url: GC("det-vs-cgy/2026/10/24/2026020178") } },
        home: { team: "Oilers", goalie: "Not announced", status: "unconfirmed", note: "Tristan Jarry started Saturday's 7-2 loss to Toronto (25 saves on 30).", source: { name: "NHL.com GameCenter (Maple Leafs at Oilers, Oct. 24)", url: GC("tor-vs-edm/2026/10/24/2026020176") } },
      },
    ],
  },
  {
    date: "2026-10-25",
    label: "Sunday, October 25, 2026",
    updated: "2026-10-25T15:10:00Z",
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
        away: { team: "Canadiens", goalie: "Not announced", status: "unconfirmed", note: "No starter announced in sources we could verify. Sam Montembeault is on injured reserve; Jacob Fowler started Friday's 4-1 win at Chicago (20 saves on 21).", source: { name: "NHL.com GameCenter (Canadiens at Blackhawks, Oct. 23)", url: GC("mtl-vs-chi/2026/10/23/2026020166") } },
        home: { team: "Jets", goalie: "Stuart Skinner or Clay Stevenson", status: "unconfirmed", note: "NHL.com: the Jets have two NHL goalies, Skinner and Stevenson, after trading Connor Hellebuyck; Nico Daws likely scratched.", source: { name: "NHL.com (Shawn P. Roarke)", url: "https://www.nhl.com/news/winnipeg-jets-will-reset-after-connor-hellebuyck-traded-to-new-jersey-devils" } },
      },
      {
        matchup: "Colorado Avalanche at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Avalanche", goalie: "Not announced", status: "unconfirmed", note: "No confirmation found yet. Mackenzie Blackwood started Friday's 6-3 win over Tampa Bay (31 saves on 34).", source: { name: "NHL.com GameCenter (Lightning at Avalanche, Oct. 23)", url: GC("tbl-vs-col/2026/10/23/2026020167") } },
        home: { team: "Predators", goalie: "Not announced", status: "unconfirmed", note: "Second half of a back-to-back: Juuse Saros made 34 saves in Saturday's 3-2 overtime loss at Pittsburgh. The team said it would not hold a morning skate.", source: { name: "NashvillePredators.com game day", url: "https://www.nhl.com/predators/news/game-day-avalanche-vs-preds-october-25-2026-10-25" } },
      },
      {
        matchup: "Minnesota Wild at Vancouver Canucks", time: "10 p.m. ET",
        away: { team: "Wild", goalie: "Calvin Pickard", status: "confirmed", note: "Coach John Hynes set the back-to-back plan: Jesper Wallstedt started Saturday at Seattle, Pickard starts Sunday.", source: { name: "The Hockey News (Wild)", url: "https://thehockeynews.com/nhl/minnesota-wild/game-day/wild-announce-goalie-plan-for-saturday-sundays-back-to-back" } },
        home: { team: "Canucks", goalie: "Not announced", status: "unconfirmed", note: "No confirmation found yet.", source: { name: "NHL.com schedule", url: "https://www.nhl.com/schedule/2026-10-25" } },
      },
    ],
  },
];
