// One entry per night. Newest first. Each goalie entry: status is "confirmed", "expected" or "unconfirmed".
// Every status must link the team, league or reporter source it relies on. Never guess.
const GC = (path) => `https://www.nhl.com/gamecenter/${path}`;
const NHL_PREVIEW = (slug, day = "october-25-2026") => `https://www.nhl.com/news/${slug}-game-preview-${day}`;
export default [
  {
    date: "2026-10-28",
    label: "Wednesday, October 28, 2026",
    updated: "2026-10-26T21:05:00Z",
    games: [
      {
        matchup: "Philadelphia Flyers at Washington Capitals", time: "7:30 p.m. ET",
        away: { team: "Flyers", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Second night of a back-to-back after Tuesday's home game against Columbus. Joseph Woll started Saturday against the Ducks.", source: { name: "NHL.com GameCenter (Ducks at Flyers, Oct. 24)", url: GC("ana-vs-phi/2026/10/24/2026020168") } },
        home: { team: "Capitals", goalie: "Not announced", status: "unconfirmed", note: "Logan Thompson (lower body) returned to practice Monday; coach Spencer Carbery called it a good step but it is not yet known whether he will play Wednesday. Charlie Lindgren started Saturday's overtime win against Buffalo.", source: { name: "NHL.com Status Report (Oct. 26)", url: "https://www.nhl.com/news/nhl-status-report-news-and-notes-october-26-2026" } },
      },
      {
        matchup: "Calgary Flames at Edmonton Oilers", time: "8:30 p.m. ET",
        away: { team: "Flames", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Devin Cooley is set to start Monday against Toronto, his fourth straight start.", source: { name: "NHL.com (Maple Leafs at Flames projected lineups)", url: "https://www.nhl.com/news/toronto-maple-leafs-calgary-flames-game-preview-october-26-2026" } },
        home: { team: "Oilers", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Tristan Jarry starts Monday against Detroit, with Matt Tomkins as backup while Devon Levi is on injured reserve.", source: { name: "Edmonton Oilers on X (Oct. 26)", url: "https://x.com/EdmontonOilers/status/2114773427089523157" } },
      },
      {
        matchup: "New Jersey Devils at Colorado Avalanche", time: "9 p.m. ET",
        away: { team: "Devils", goalie: "Not announced", status: "unconfirmed", note: "Second night of a back-to-back after Tuesday at Dallas. Coach Sheldon Keefe said the intent is to get newly acquired Connor Hellebuyck involved on this road trip, one day at a time.", source: { name: "NHL.com (Hellebuyck ready to make Devils debut)", url: "https://www.nhl.com/news/connor-hellebuyck-says-he-is-ready-today-to-make-new-jersey-devils-debut" } },
        home: { team: "Avalanche", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Scott Wedgewood started Sunday's 6-2 loss at Nashville.", source: { name: "NHL.com GameCenter (Avalanche at Predators, Oct. 25)", url: GC("col-vs-nsh/2026/10/25/2026020183") } },
      },
      {
        matchup: "Toronto Maple Leafs at Seattle Kraken", time: "10 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Sergei Bobrovsky starts Monday at Calgary after Anthony Stolarz started Saturday at Edmonton.", source: { name: "NHL.com (Maple Leafs at Flames projected lineups)", url: "https://www.nhl.com/news/toronto-maple-leafs-calgary-flames-game-preview-october-26-2026" } },
        home: { team: "Kraken", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Joey Daccord started Saturday's 5-1 loss to Minnesota.", source: { name: "NHL.com GameCenter (Wild at Kraken, Oct. 24)", url: GC("min-vs-sea/2026/10/24/2026020179") } },
      },
    ],
  },
  {
    date: "2026-10-27",
    label: "Tuesday, October 27, 2026",
    updated: "2026-10-26T21:05:00Z",
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
        away: { team: "Kings", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Second night of a back-to-back after Monday's game at the Rangers, where Darcy Kuemper is expected to start. Anton Forsberg started Saturday at New Jersey.", source: { name: "LA Kings Insider (Oct. 26 preview)", url: "https://lakingsinsider.com/2026/10/26/10-26-preview-power-play-changes-possible-zuccarello-out-upper-body-byfield-preparing-to-play-ward-expected/" } },
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
        away: { team: "Devils", goalie: "Not announced", status: "unconfirmed", note: "No starter named. Connor Hellebuyck practiced with New Jersey for the first time Monday and said he is ready; coach Sheldon Keefe said the intent is to get him involved on this three-game trip but that it is day to day. Jake Allen started Saturday against the Kings.", source: { name: "NHL.com (Hellebuyck ready to make Devils debut)", url: "https://www.nhl.com/news/connor-hellebuyck-says-he-is-ready-today-to-make-new-jersey-devils-debut" } },
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
    updated: "2026-10-26T21:05:00Z",
    games: [
      {
        matchup: "Los Angeles Kings at New York Rangers", time: "7 p.m. ET",
        away: { team: "Kings", goalie: "Darcy Kuemper", status: "expected", note: "LA Kings Insider's game-day preview says to look for Kuemper back in net after Anton Forsberg started Saturday, and NHL.com's projected lineup lists him first. We have not seen a team announcement, so he stays expected.", source: { name: "LA Kings Insider (Oct. 26 preview)", url: "https://lakingsinsider.com/2026/10/26/10-26-preview-power-play-changes-possible-zuccarello-out-upper-body-byfield-preparing-to-play-ward-expected/" } },
        home: { team: "Rangers", goalie: "James Reimer", status: "confirmed", note: "NHL.com's status report says Reimer will make his first start for the Rangers, a day after signing a one-year contract. Dylan Garand is the backup.", source: { name: "NHL.com (Kings at Rangers projected lineups)", url: "https://www.nhl.com/news/los-angeles-kings-new-york-rangers-game-preview-october-26-2026" } },
      },
      {
        matchup: "Toronto Maple Leafs at Calgary Flames", time: "8:30 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Sergei Bobrovsky", status: "confirmed", note: "NHL.com: Bobrovsky will start after Anthony Stolarz started Saturday's 7-2 win at Edmonton.", source: { name: "NHL.com (Maple Leafs at Flames projected lineups)", url: "https://www.nhl.com/news/toronto-maple-leafs-calgary-flames-game-preview-october-26-2026" } },
        home: { team: "Flames", goalie: "Devin Cooley", status: "confirmed", note: "NHL.com: Cooley, named the NHL's Second Star of the Week on Monday, will start for the fourth straight game. Dustin Wolf is the backup.", source: { name: "NHL.com (Maple Leafs at Flames projected lineups)", url: "https://www.nhl.com/news/toronto-maple-leafs-calgary-flames-game-preview-october-26-2026" } },
      },
      {
        matchup: "Detroit Red Wings at Edmonton Oilers", time: "9:30 p.m. ET",
        away: { team: "Red Wings", goalie: "Michal Postava", status: "confirmed", note: "Coach Todd McLellan announced after the morning skate that Postava will make his first NHL start. John Gibson is the backup; NHL.com lists Daniil Tarasov as injured.", source: { name: "MLive (Ansar Khan, Oct. 26)", url: "https://www.mlive.com/redwings/2026/10/michal-postava-faces-tough-test-in-first-nhl-start-for-red-wings.html" } },
        home: { team: "Oilers", goalie: "Tristan Jarry", status: "confirmed", note: "The Oilers' official X account posted that Jarry starts against Detroit. Matt Tomkins is the backup with Devon Levi on injured reserve.", source: { name: "Edmonton Oilers on X (Oct. 26)", url: "https://x.com/EdmontonOilers/status/2114773427089523157" } },
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
