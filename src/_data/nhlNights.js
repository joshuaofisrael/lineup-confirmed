// One entry per night. Newest first. Each goalie entry: status is "confirmed", "expected" or "unconfirmed".
// Every status must link the team, league or reporter source it relies on. Never guess.
const GC = (path) => `https://www.nhl.com/gamecenter/${path}`;
const NHL_PREVIEW = (slug, day = "october-25-2026") => `https://www.nhl.com/news/${slug}-game-preview-${day}`;
export default [
  {
    date: "2026-10-27",
    label: "Tuesday, October 27, 2026",
    updated: "2026-10-26T15:30:00Z",
    games: [
      {
        matchup: "Columbus Blue Jackets at Philadelphia Flyers", time: "7 p.m. ET",
        away: { team: "Blue Jackets", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Cam Talbot started Saturday against the Golden Knights.", source: { name: "NHL.com GameCenter (Golden Knights at Blue Jackets, Oct. 24)", url: GC("vgk-vs-cbj/2026/10/24/2026020174") } },
        home: { team: "Flyers", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Joseph Woll started Saturday against the Ducks.", source: { name: "NHL.com GameCenter (Ducks at Flyers, Oct. 24)", url: GC("ana-vs-phi/2026/10/24/2026020168") } },
      },
      {
        matchup: "Boston Bruins at Carolina Hurricanes", time: "8 p.m. ET",
        away: { team: "Bruins", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Jeremy Swayman started Saturday against the Sharks.", source: { name: "NHL.com GameCenter (Sharks at Bruins, Oct. 24)", url: GC("sjs-vs-bos/2026/10/24/2026020170") } },
        home: { team: "Hurricanes", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Pyotr Kochetkov started Saturday at the Blues.", source: { name: "NHL.com GameCenter (Hurricanes at Blues, Oct. 24)", url: GC("car-vs-stl/2026/10/24/2026020175") } },
      },
      {
        matchup: "Los Angeles Kings at Chicago Blackhawks", time: "8 p.m. ET",
        away: { team: "Kings", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Second night of a back-to-back after Monday's game at the Rangers. Anton Forsberg started Saturday at New Jersey.", source: { name: "NHL.com GameCenter (Kings at Devils, Oct. 24)", url: GC("lak-vs-njd/2026/10/24/2026020169") } },
        home: { team: "Blackhawks", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Spencer Knight started Sunday against the Panthers.", source: { name: "NHL.com GameCenter (Panthers at Blackhawks, Oct. 25)", url: GC("fla-vs-chi/2026/10/25/2026020180") } },
      },
      {
        matchup: "Montreal Canadiens at St. Louis Blues", time: "8 p.m. ET",
        away: { team: "Canadiens", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Jacob Fowler started Sunday at the Jets.", source: { name: "NHL.com GameCenter (Canadiens at Jets, Oct. 25)", url: GC("mtl-vs-wpg/2026/10/25/2026020182") } },
        home: { team: "Blues", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Joel Hofer started Saturday against the Hurricanes.", source: { name: "NHL.com GameCenter (Hurricanes at Blues, Oct. 24)", url: GC("car-vs-stl/2026/10/24/2026020175") } },
      },
      {
        matchup: "New York Islanders at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Islanders", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Ilya Sorokin started Sunday at the Stars.", source: { name: "NHL.com GameCenter (Islanders at Stars, Oct. 25)", url: GC("nyi-vs-dal/2026/10/25/2026020181") } },
        home: { team: "Predators", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Justus Annunen started Sunday against the Avalanche.", source: { name: "NHL.com GameCenter (Avalanche at Predators, Oct. 25)", url: GC("col-vs-nsh/2026/10/25/2026020183") } },
      },
      {
        matchup: "New Jersey Devils at Dallas Stars", time: "8 p.m. ET",
        away: { team: "Devils", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Jake Allen started Saturday against the Kings.", source: { name: "NHL.com GameCenter (Kings at Devils, Oct. 24)", url: GC("lak-vs-njd/2026/10/24/2026020169") } },
        home: { team: "Stars", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Jake Oettinger started Sunday against the Islanders.", source: { name: "NHL.com GameCenter (Islanders at Stars, Oct. 25)", url: GC("nyi-vs-dal/2026/10/25/2026020181") } },
      },
      {
        matchup: "Florida Panthers at Winnipeg Jets", time: "8 p.m. ET",
        away: { team: "Panthers", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Akira Schmid started Sunday at the Blackhawks.", source: { name: "NHL.com GameCenter (Panthers at Blackhawks, Oct. 25)", url: GC("fla-vs-chi/2026/10/25/2026020180") } },
        home: { team: "Jets", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Stuart Skinner started Sunday against the Canadiens.", source: { name: "NHL.com GameCenter (Canadiens at Jets, Oct. 25)", url: GC("mtl-vs-wpg/2026/10/25/2026020182") } },
      },
      {
        matchup: "Minnesota Wild at Utah Mammoth", time: "9 p.m. ET",
        away: { team: "Wild", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Calvin Pickard started Sunday at the Canucks.", source: { name: "NHL.com GameCenter (Wild at Canucks, Oct. 25)", url: GC("min-vs-van/2026/10/25/2026020184") } },
        home: { team: "Mammoth", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Karel Vejmelka started Saturday against the Lightning.", source: { name: "NHL.com GameCenter (Lightning at Mammoth, Oct. 24)", url: GC("tbl-vs-uta/2026/10/24/2026020177") } },
      },
      {
        matchup: "Ottawa Senators at Vegas Golden Knights", time: "10 p.m. ET",
        away: { team: "Senators", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Jonas Johansson started Saturday against the Rangers.", source: { name: "NHL.com GameCenter (Rangers at Senators, Oct. 24)", url: GC("nyr-vs-ott/2026/10/24/2026020171") } },
        home: { team: "Golden Knights", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Carter Hart started Saturday at the Blue Jackets.", source: { name: "NHL.com GameCenter (Golden Knights at Blue Jackets, Oct. 24)", url: GC("vgk-vs-cbj/2026/10/24/2026020174") } },
      },
      {
        matchup: "Vancouver Canucks at Anaheim Ducks", time: "10 p.m. ET",
        away: { team: "Canucks", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Leevi Meril\u00e4inen started Sunday against the Wild.", source: { name: "NHL.com GameCenter (Wild at Canucks, Oct. 25)", url: GC("min-vs-van/2026/10/25/2026020184") } },
        home: { team: "Ducks", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Lukas Dostal started Saturday at the Flyers.", source: { name: "NHL.com GameCenter (Ducks at Flyers, Oct. 24)", url: GC("ana-vs-phi/2026/10/24/2026020168") } },
      },
      {
        matchup: "Buffalo Sabres at San Jose Sharks", time: "10:30 p.m. ET",
        away: { team: "Sabres", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Ukko-Pekka Luukkonen started Saturday at the Capitals.", source: { name: "NHL.com GameCenter (Sabres at Capitals, Oct. 24)", url: GC("buf-vs-wsh/2026/10/24/2026020173") } },
        home: { team: "Sharks", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Alex Nedeljkovic started Saturday at the Bruins.", source: { name: "NHL.com GameCenter (Sharks at Bruins, Oct. 24)", url: GC("sjs-vs-bos/2026/10/24/2026020170") } },
      },
    ],
  },
  {
    date: "2026-10-26",
    label: "Monday, October 26, 2026",
    updated: "2026-10-26T15:30:00Z",
    games: [
      {
        matchup: "Los Angeles Kings at New York Rangers", time: "7 p.m. ET",
        away: { team: "Kings", goalie: "Not announced", status: "unconfirmed", note: "No starter named as of Monday morning. Darcy Kuemper and Anton Forsberg were the two goalies at Sunday's practice in Newark; Forsberg started Saturday. The Kings play at Chicago on Tuesday, the second half of a back-to-back.", source: { name: "LA Kings Insider (Oct. 25 practice report)", url: "https://lakingsinsider.com/2026/10/25/the-focus-remains-on-generating-offense-throughout-the-lineup-as-kings-practice-on-sunday-in-newark/" } },
        home: { team: "Rangers", goalie: "Not announced", status: "unconfirmed", note: "No starter named as of Monday morning. The Rangers signed James Reimer to a one-year contract on Sunday; Dylan Garand has started every game since Igor Shesterkin's season-ending injury.", source: { name: "NHL.com (Reimer signs one-year contract)", url: "https://www.nhl.com/news/new-york-rangers-sign-james-reimer-to-one-year-contract" } },
      },
      {
        matchup: "Toronto Maple Leafs at Calgary Flames", time: "8:30 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Not announced", status: "unconfirmed", note: "No starter named as of Monday morning. Anthony Stolarz started Saturday's 7-2 win at Edmonton; TSN's Mark Masters reported Sergei Bobrovsky was on the ice at Sunday's optional practice.", source: { name: "TSN (Leafs Ice Chips, Oct. 25)", url: "https://www.tsn.ca/nhl/video/2026/10/25/leafs-ice-chips-what-about-bob/" } },
        home: { team: "Flames", goalie: "Not announced", status: "unconfirmed", note: "No starter named as of Monday morning. Devin Cooley has started Calgary's past three games, all wins.", source: { name: "NHL.com (NHL On Tap, Oct. 26)", url: "https://www.nhl.com/news/nhl-on-tap-news-and-notes-october-26-2026" } },
      },
      {
        matchup: "Detroit Red Wings at Edmonton Oilers", time: "9:30 p.m. ET",
        away: { team: "Red Wings", goalie: "Not announced", status: "unconfirmed", note: "No starter named as of Monday morning. John Gibson started Saturday's 4-1 loss at Calgary.", source: { name: "EdmontonOilers.com (game preview, Oct. 26)", url: "https://www.nhl.com/oilers/news/preview-oilers-vs-red-wings-10-26-26" } },
        home: { team: "Oilers", goalie: "Not announced", status: "unconfirmed", note: "No starter named as of Monday morning. Devon Levi is on injured reserve and Matt Tomkins was recalled from AHL Bakersfield on Oct. 23; Tristan Jarry started Saturday.", source: { name: "EdmontonOilers.com (Levi to IR, Tomkins recalled)", url: "https://www.nhl.com/oilers/news/release-oilers-place-levi-on-ir-tomkins-recalled-on-emergency-basis" } },
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
