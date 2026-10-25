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
    updated: "2026-10-25T21:20:00Z",
    games: [
      {
        matchup: "Florida Panthers at Chicago Blackhawks", time: "3 p.m. ET",
        away: { team: "Panthers", goalie: "Akira Schmid", status: "confirmed", note: "Started, as the team preview said he would. Jacob Markstrom is injured (upper body).", source: { name: "NHL.com GameCenter (Panthers at Blackhawks, Oct. 25)", url: GC("fla-vs-chi/2026/10/25/2026020180") } },
        home: { team: "Blackhawks", goalie: "Spencer Knight", status: "confirmed", note: "Knight started, per the NHL.com box score. NHL.com's projection had listed Arvid Soderblom first.", source: { name: "NHL.com GameCenter (Panthers at Blackhawks, Oct. 25)", url: GC("fla-vs-chi/2026/10/25/2026020180") } },
      },
      {
        matchup: "New York Islanders at Dallas Stars", time: "6 p.m. ET",
        away: { team: "Islanders", goalie: "Ilya Sorokin", status: "expected", note: "The Islanders' own game preview says Sorokin is expected to start, though unconfirmed. (NHL.com's earlier projection had listed Semyon Varlamov first.)", source: { name: "NewYorkIslanders.com (Shannon Bickert)", url: "https://www.nhl.com/islanders/news/game-preview-islanders-at-stars-oct-25-2026" } },
        home: { team: "Stars", goalie: "Jake Oettinger", status: "expected", note: "Expected per the Islanders' preview and listed first in NHL.com's projected lineup, with Casey DeSmith as backup.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("new-york-islanders-dallas-stars") } },
      },
      {
        matchup: "Montreal Canadiens at Winnipeg Jets (Heritage Classic)", time: "7 p.m. ET",
        away: { team: "Canadiens", goalie: "Jacob Fowler", status: "expected", note: "Listed first in goal in NHL.com's projected lineup, ahead of Jakub Dobes. Fowler also started Friday's 4-1 win at Chicago. Sam Montembeault is injured.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("montreal-canadiens-winnipeg-jets") } },
        home: { team: "Jets", goalie: "Stuart Skinner", status: "expected", note: "Listed first in goal in NHL.com's projected lineup, with Clay Stevenson as backup and Nico Daws a scratch. First game since the Connor Hellebuyck trade.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("montreal-canadiens-winnipeg-jets") } },
      },
      {
        matchup: "Colorado Avalanche at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Avalanche", goalie: "Scott Wedgewood", status: "expected", note: "Listed first in goal in NHL.com's projected lineup, with Mackenzie Blackwood (Friday's starter) as backup.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("colorado-avalanche-nashville-predators") } },
        home: { team: "Predators", goalie: "Justus Annunen", status: "expected", note: "NHL.com: Annunen is expected to start after Juuse Saros made 34 saves in Saturday's overtime loss at Pittsburgh.", source: { name: "NHL.com projected lineups", url: NHL_PREVIEW("colorado-avalanche-nashville-predators") } },
      },
      {
        matchup: "Minnesota Wild at Vancouver Canucks", time: "10 p.m. ET",
        away: { team: "Wild", goalie: "Calvin Pickard", status: "confirmed", note: "Coach John Hynes set the back-to-back plan: Jesper Wallstedt started Saturday at Seattle, Pickard starts Sunday.", source: { name: "The Hockey News (Wild)", url: "https://thehockeynews.com/nhl/minnesota-wild/game-day/wild-announce-goalie-plan-for-saturday-sundays-back-to-back" } },
        home: { team: "Canucks", goalie: "Leevi Merilainen", status: "expected", note: "Projected to start after Kevin Lankinen played Thursday; listed first in NHL.com's projected lineup.", source: { name: "The Hockey News (Canucks)", url: "https://thehockeynews.com/nhl/vancouver-canucks/game-day/lineup-notes-merilainen-projected-to-start-ohgren-draws-back-in-as-canucks-take-on-the-wild" } },
      },
    ],
  },
];
