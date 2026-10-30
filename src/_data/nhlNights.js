import { applyNightOverlays } from "../../lib/night-overlays.js";
import nightOverlays from "./nhlNightOverlays.js";

// One entry per night. Newest first. Each goalie entry: status is "confirmed", "expected" or "unconfirmed".
// Every status must link the team, league or reporter source it relies on. Never guess.
// Timed corrections live in nhlNightOverlays.js and apply only after publishAt.
const GC = (path) => `https://www.nhl.com/gamecenter/${path}`;
const NHL_PREVIEW = (slug, day = "october-25-2026") => `https://www.nhl.com/news/${slug}-game-preview-${day}`;
const nights = [
  {
    date: "2026-10-29",
    label: "Thursday, October 29, 2026",
    updated: "2026-10-27T21:45:00Z",
    games: [
      {
        matchup: "Winnipeg Jets at Tampa Bay Lightning", time: "7 p.m. ET",
        away: { team: "Jets", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Mitchell Clinton, Jets broadcaster, on X (Oct. 27)", url: "https://x.com/MitchellClinton/status/2115101792426205231" } },
        home: { team: "Lightning", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27). Dennis Hildeby started Saturday's game at Utah, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Lightning at Mammoth, Oct. 24)", url: GC("tbl-vs-uta/2026/10/24/2026020177") } },
      },
      {
        matchup: "Utah Mammoth at Pittsburgh Penguins", time: "7 p.m. ET",
        away: { team: "Mammoth", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Wild at Mammoth projected lineups)", url: NHL_PREVIEW("minnesota-wild-utah-mammoth", "october-27-2026") } },
        home: { team: "Penguins", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27). Arturs Silovs started Saturday's 3-2 overtime win over Nashville, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Predators at Penguins, Oct. 24)", url: GC("nsh-vs-pit/2026/10/24/2026020172") } },
      },
      {
        matchup: "Columbus Blue Jackets at Carolina Hurricanes", time: "7 p.m. ET",
        away: { team: "Blue Jackets", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Dave Maetzold on X (Oct. 27)", url: "https://x.com/DMaetzMedia/status/2115114662283112895" } },
        home: { team: "Hurricanes", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Walt Ruff, Hurricanes, on X (Oct. 27)", url: "https://x.com/WaltRuff/status/2115089172771836313" } },
      },
      {
        matchup: "Chicago Blackhawks at Detroit Red Wings", time: "7:30 p.m. ET",
        away: { team: "Blackhawks", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Kings at Blackhawks projected lineups)", url: NHL_PREVIEW("los-angeles-kings-chicago-blackhawks", "october-27-2026") } },
        home: { team: "Red Wings", goalie: "Not announced", status: "unconfirmed", note: "No starter named. Michal Postava won his first NHL start Monday at Edmonton, with John Gibson as backup. Detroit had not named a starter for this game at our last check (Oct. 27).", source: { name: "NHL.com (Postava wins first NHL start)", url: "https://www.nhl.com/news/detroit-red-wings-edmonton-oilers-game-recap-october-26-2026" } },
      },
      {
        matchup: "Boston Bruins at St. Louis Blues", time: "8 p.m. ET",
        away: { team: "Bruins", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Adam Pellerin, NESN, on X (Oct. 27)", url: "https://x.com/adampellerin/status/2115110408919073160" } },
        home: { team: "Blues", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Canadiens at Blues projected lineups)", url: NHL_PREVIEW("montreal-canadiens-st-louis-blues", "october-27-2026") } },
      },
      {
        matchup: "Washington Capitals at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Capitals", goalie: "Not announced", status: "unconfirmed", note: "Second night of a back-to-back after Wednesday's home game against Philadelphia. No starter for this game was named at our last check (Oct. 27).", source: { name: "NHL.com (NHL Status Report, Oct. 27)", url: "https://www.nhl.com/news/nhl-status-report-news-and-notes-october-27-2026" } },
        home: { team: "Predators", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Stefen Rosner on X (Oct. 27)", url: "https://x.com/stefen_rosner/status/2115104724730933267" } },
      },
      {
        matchup: "Montreal Canadiens at Dallas Stars", time: "8 p.m. ET",
        away: { team: "Canadiens", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Montreal Canadiens on X (Oct. 27)", url: "https://x.com/CanadiensMTL/status/2115131637537120528" } },
        home: { team: "Stars", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Bruce LeVine, Stars radio, on X (Oct. 27)", url: "https://x.com/BruceLeVinePuck/status/2115104987370136024" } },
      },
      {
        matchup: "New York Islanders at Minnesota Wild", time: "8 p.m. ET",
        away: { team: "Islanders", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Stefen Rosner on X (Oct. 27)", url: "https://x.com/stefen_rosner/status/2115156576906420610" } },
        home: { team: "Wild", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Joe O'Donnell, Wild radio, on X (Oct. 27)", url: "https://x.com/WildJoeRadio/status/2115127288069263459" } },
      },
      {
        matchup: "Buffalo Sabres at Anaheim Ducks", time: "10 p.m. ET",
        away: { team: "Sabres", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Sabres at Sharks projected lineups)", url: NHL_PREVIEW("buffalo-sabres-san-jose-sharks", "october-27-2026") } },
        home: { team: "Ducks", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Derek Lee on X (Oct. 27)", url: "https://x.com/Derek_Lee27/status/2115139526020698254" } },
      },
      {
        matchup: "Ottawa Senators at Los Angeles Kings", time: "10 p.m. ET",
        away: { team: "Senators", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "Jackson Starr on X (Oct. 27)", url: "https://x.com/Jackson_Starr_/status/2115135698722226331" } },
        home: { team: "Kings", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Kings at Blackhawks projected lineups)", url: NHL_PREVIEW("los-angeles-kings-chicago-blackhawks", "october-27-2026") } },
      },
      {
        matchup: "Vancouver Canucks at San Jose Sharks", time: "10 p.m. ET",
        away: { team: "Canucks", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Canucks at Ducks projected lineups)", url: NHL_PREVIEW("vancouver-canucks-anaheim-ducks", "october-27-2026") } },
        home: { team: "Sharks", goalie: "Not announced", status: "unconfirmed", note: "No starter for this game was reported at our last check (Oct. 27).", source: { name: "NHL.com (Sabres at Sharks projected lineups)", url: NHL_PREVIEW("buffalo-sabres-san-jose-sharks", "october-27-2026") } },
      },
    ],
  },
  {
    date: "2026-10-28",
    label: "Wednesday, October 28, 2026",
    updated: "2026-10-27T21:45:00Z",
    games: [
      {
        matchup: "Philadelphia Flyers at Washington Capitals", time: "7:30 p.m. ET",
        away: { team: "Flyers", goalie: "Not announced", status: "unconfirmed", note: "No starter named. Second night of a back-to-back: Dan Vladar starts Tuesday against Columbus, per coach Rick Tocchet. No Wednesday starter has been named. Joseph Woll started Saturday against the Ducks.", source: { name: "Charlie O'Connor, PHLY Sports, on X (Oct. 27)", url: "https://x.com/charlieo_conn/status/2115088794047152486" } },
        home: { team: "Capitals", goalie: "Not announced", status: "unconfirmed", note: "NHL.com's status report lists Logan Thompson (lower body) as probable to return Wednesday after a second straight full practice Tuesday. Coach Spencer Carbery said the team would see how he came out of practice before setting a plan. Not an announced start, so unconfirmed. Charlie Lindgren started Saturday's overtime win against Buffalo.", source: { name: "NHL.com (NHL Status Report, Oct. 27)", url: "https://www.nhl.com/news/nhl-status-report-news-and-notes-october-27-2026" } },
      },
      {
        matchup: "Calgary Flames at Edmonton Oilers", time: "8:30 p.m. ET",
        away: { team: "Flames", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Devin Cooley made 26 saves in Monday's 5-2 win over Toronto, his fourth straight start.", source: { name: "NHL.com GameCenter (Maple Leafs at Flames, Oct. 26)", url: GC("tor-vs-cgy/2026/10/26/2026020186") } },
        home: { team: "Oilers", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Tristan Jarry started Monday's 4-3 shootout loss to Detroit, with Matt Tomkins as backup while Devon Levi is on injured reserve.", source: { name: "NHL.com GameCenter (Red Wings at Oilers, Oct. 26)", url: GC("det-vs-edm/2026/10/26/2026020187") } },
      },
      {
        matchup: "New Jersey Devils at Colorado Avalanche", time: "9 p.m. ET",
        away: { team: "Devils", goalie: "Not announced", status: "unconfirmed", note: "Second night of a back-to-back. Connor Hellebuyck makes his Devils debut Tuesday at Dallas, per coach Sheldon Keefe; New Jersey has not said who starts in Colorado. Jake Allen started Saturday against the Kings.", source: { name: "NHL.com (Hellebuyck to make first start for Devils)", url: "https://www.nhl.com/news/new-jersey-goalie-connor-hellebuyck-to-make-first-start-devils-debut-tonight-against-stars" } },
        home: { team: "Avalanche", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Scott Wedgewood started Sunday's 6-2 loss at Nashville.", source: { name: "NHL.com GameCenter (Avalanche at Predators, Oct. 25)", url: GC("col-vs-nsh/2026/10/25/2026020183") } },
      },
      {
        matchup: "Toronto Maple Leafs at Seattle Kraken", time: "10 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Sergei Bobrovsky started Monday's 5-2 loss at Calgary; Anthony Stolarz started Saturday at Edmonton.", source: { name: "NHL.com GameCenter (Maple Leafs at Flames, Oct. 26)", url: GC("tor-vs-cgy/2026/10/26/2026020186") } },
        home: { team: "Kraken", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Joey Daccord started Saturday's 5-1 loss to Minnesota.", source: { name: "NHL.com GameCenter (Wild at Kraken, Oct. 24)", url: GC("min-vs-sea/2026/10/24/2026020179") } },
      },
    ],
  },
  {
    date: "2026-10-27",
    label: "Tuesday, October 27, 2026",
    updated: "2026-10-27T21:45:00Z",
    games: [
      {
        matchup: "Columbus Blue Jackets at Philadelphia Flyers", time: "7 p.m. ET",
        away: { team: "Blue Jackets", goalie: "Cam Talbot", status: "confirmed", note: "Columbus reporter Dave Maetzold, relaying coach Rick Bowness's morning update, reported that Talbot gets a second straight start after Saturday's game against Vegas. NHL.com's projected lineup also lists him first.", source: { name: "Dave Maetzold on X (Oct. 27)", url: "https://x.com/DMaetzMedia/status/2115114662283112895" } },
        home: { team: "Flyers", goalie: "Dan Vladar", status: "confirmed", note: "Coach Rick Tocchet said after the morning skate that Vladar starts, as PHLY Sports' Charlie O'Connor and the Inquirer's Jackie Spiegel reported. Joseph Woll started Saturday against the Ducks.", source: { name: "Charlie O'Connor, PHLY Sports, on X (Oct. 27)", url: "https://x.com/charlieo_conn/status/2115088794047152486" } },
      },
      {
        matchup: "Boston Bruins at Carolina Hurricanes", time: "8 p.m. ET",
        away: { team: "Bruins", goalie: "Jeremy Swayman", status: "expected", note: "NESN's Adam Pellerin posted \"Jeremy Swayman in net\" on Tuesday. That is a reporter's lineup note rather than a coach's quote, so he is listed as expected. Swayman also started Saturday against the Sharks.", source: { name: "Adam Pellerin, NESN, on X (Oct. 27)", url: "https://x.com/adampellerin/status/2115110408919073160" } },
        home: { team: "Hurricanes", goalie: "Pyotr Kochetkov", status: "expected", note: "Kochetkov was in the starter's crease at Carolina's morning skate, with Brandon Bussi in the backup spot, and NHL.com's projected lineup lists him first. Not a coach's announcement, so listed as expected. He also started Saturday's 4-0 win at St. Louis.", source: { name: "Walt Ruff, Hurricanes, on X (Oct. 27)", url: "https://x.com/WaltRuff/status/2115089172771836313" } },
      },
      {
        matchup: "Los Angeles Kings at Chicago Blackhawks", time: "8 p.m. ET",
        away: { team: "Kings", goalie: "Anton Forsberg", status: "expected", note: "Second night of a back-to-back. The Kings did not hold a morning skate; NHL.com says Forsberg is expected to start after Darcy Kuemper made 23 saves in Monday's win at the Rangers.", source: { name: "NHL.com (Kings at Blackhawks projected lineups)", url: NHL_PREVIEW("los-angeles-kings-chicago-blackhawks", "october-27-2026") } },
        home: { team: "Blackhawks", goalie: "Spencer Knight", status: "expected", note: "NHL.com says Knight is expected to make his seventh straight start, and Charlie Roumeliotis reported he worked in the starter's net at the morning skate. Not a coach's announcement, so listed as expected.", source: { name: "NHL.com (Kings at Blackhawks projected lineups)", url: NHL_PREVIEW("los-angeles-kings-chicago-blackhawks", "october-27-2026") } },
      },
      {
        matchup: "Montreal Canadiens at St. Louis Blues", time: "8 p.m. ET",
        away: { team: "Canadiens", goalie: "Jacob Fowler", status: "confirmed", note: "The Canadiens' official X account posted that Fowler starts. NHL.com's earlier projection had listed Jakub Dobes first; the team announcement takes precedence. Fowler also started Sunday at the Jets.", source: { name: "Montreal Canadiens on X (Oct. 27)", url: "https://x.com/CanadiensMTL/status/2115131637537120528" } },
        home: { team: "Blues", goalie: "Jordan Binnington", status: "confirmed", note: "NHL.com's game-day status report: \"Binnington starts for the first time since Oct. 17.\" He was also in the starter's net at the morning skate, the Post-Dispatch's Matthew DeFranks reported. Joel Hofer started Saturday.", source: { name: "NHL.com (Canadiens at Blues projected lineups)", url: NHL_PREVIEW("montreal-canadiens-st-louis-blues", "october-27-2026") } },
      },
      {
        matchup: "New York Islanders at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Islanders", goalie: "Semyon Varlamov", status: "confirmed", note: "Stefen Rosner reported that Varlamov gets the start tonight, and NHL.com's projected lineup lists him first. Ilya Sorokin started Sunday at Dallas.", source: { name: "Stefen Rosner on X (Oct. 27)", url: "https://x.com/stefen_rosner/status/2115156576906420610" } },
        home: { team: "Predators", goalie: "Juuse Saros", status: "expected", note: "Saros was in the starter's crease at Nashville's morning skate, Stefen Rosner reported, and NHL.com's projected lineup lists him first. Not a coach's announcement, so listed as expected. Justus Annunen started Sunday against the Avalanche.", source: { name: "Stefen Rosner on X (Oct. 27)", url: "https://x.com/stefen_rosner/status/2115104724730933267" } },
      },
      {
        matchup: "New Jersey Devils at Dallas Stars", time: "8 p.m. ET",
        away: { team: "Devils", goalie: "Connor Hellebuyck", status: "confirmed", note: "Coach Sheldon Keefe: \"He is going tonight.\" Hellebuyck makes his Devils debut four days after the trade from Winnipeg; it is his first NHL game since April 13. Jake Allen started Saturday against the Kings.", source: { name: "NHL.com (Hellebuyck to make first start for Devils)", url: "https://www.nhl.com/news/new-jersey-goalie-connor-hellebuyck-to-make-first-start-devils-debut-tonight-against-stars" } },
        home: { team: "Stars", goalie: "Casey DeSmith", status: "confirmed", note: "Stars radio analyst Bruce LeVine reported that DeSmith starts against New Jersey, and NHL.com's projected lineup agrees. Jake Oettinger started Sunday against the Islanders.", source: { name: "Bruce LeVine, Stars radio, on X (Oct. 27)", url: "https://x.com/BruceLeVinePuck/status/2115104987370136024" } },
      },
      {
        matchup: "Florida Panthers at Winnipeg Jets", time: "8 p.m. ET",
        away: { team: "Panthers", goalie: "Akira Schmid", status: "confirmed", note: "The Panthers' official X account posted that Schmid starts, per coach Paul Maurice. He also started Sunday at the Blackhawks.", source: { name: "Florida Panthers on X (Oct. 27)", url: "https://x.com/FlaPanthers/status/2115131333303480682" } },
        home: { team: "Jets", goalie: "Clay Stevenson", status: "expected", note: "Stevenson took warm-up shots in the starter's net at the morning skate, and Jets broadcaster Mitchell Clinton and CJOB's Kelly Moore both pointed to him getting the call. NHL.com's projected lineup lists Stuart Skinner first, so the reports conflict; listed as expected until the team confirms. Skinner started Sunday against the Canadiens.", source: { name: "Mitchell Clinton, Jets broadcaster, on X (Oct. 27)", url: "https://x.com/MitchellClinton/status/2115101792426205231" } },
      },
      {
        matchup: "Minnesota Wild at Utah Mammoth", time: "9 p.m. ET",
        away: { team: "Wild", goalie: "Jesper Wallstedt", status: "confirmed", note: "Wild radio's Joe O'Donnell reported that coach John Hynes confirmed Wallstedt starts. Calvin Pickard started Sunday at the Canucks.", source: { name: "Joe O'Donnell, Wild radio, on X (Oct. 27)", url: "https://x.com/WildJoeRadio/status/2115127288069263459" } },
        home: { team: "Mammoth", goalie: "Karel Vejmelka", status: "expected", note: "Vejmelka was first off the ice at the morning skate, KSL Sports reported, and NHL.com's projected lineup lists him first. Not a coach's announcement, so listed as expected. He also started Saturday against the Lightning.", source: { name: "NHL.com (Wild at Mammoth projected lineups)", url: NHL_PREVIEW("minnesota-wild-utah-mammoth", "october-27-2026") } },
      },
      {
        matchup: "Ottawa Senators at Vegas Golden Knights", time: "10 p.m. ET",
        away: { team: "Senators", goalie: "Jonas Johansson", status: "confirmed", note: "Coach Travis Green announced the same lineup, with Johansson starting again, Jackson Starr reported. Johansson also started Saturday against the Rangers.", source: { name: "Jackson Starr on X (Oct. 27)", url: "https://x.com/Jackson_Starr_/status/2115135698722226331" } },
        home: { team: "Golden Knights", goalie: "Adin Hill", status: "confirmed", note: "NHL.com's status report: Carter Hart was injured during the morning skate and is being evaluated, and Hill will start. Hart started Saturday at Columbus.", source: { name: "NHL.com (NHL Status Report, Oct. 27)", url: "https://www.nhl.com/news/nhl-status-report-news-and-notes-october-27-2026" } },
      },
      {
        matchup: "Vancouver Canucks at Anaheim Ducks", time: "10 p.m. ET",
        away: { team: "Canucks", goalie: "Leevi Meril\u00e4inen", status: "expected", note: "The Canucks did not hold a morning skate. NHL.com's projected lineup lists Meril\u00e4inen first, with Kevin Lankinen as backup and Thatcher Demko injured. A projection, so listed as expected. He also started Sunday against the Wild.", source: { name: "NHL.com (Canucks at Ducks projected lineups)", url: NHL_PREVIEW("vancouver-canucks-anaheim-ducks", "october-27-2026") } },
        home: { team: "Ducks", goalie: "Lukas Dostal", status: "confirmed", note: "Coach Joel Quenneville said Dostal starts, Derek Lee and Zach Cavanagh reported. Dostal also started Saturday's 5-4 win at Philadelphia.", source: { name: "Derek Lee on X (Oct. 27)", url: "https://x.com/Derek_Lee27/status/2115139526020698254" } },
      },
      {
        matchup: "Buffalo Sabres at San Jose Sharks", time: "10:30 p.m. ET",
        away: { team: "Sabres", goalie: "Colten Ellis", status: "expected", note: "NHL.com's projected lineup lists Ellis first, with Ukko-Pekka Luukkonen as backup. A projection, so listed as expected. Luukkonen started Saturday at Washington.", source: { name: "NHL.com (Sabres at Sharks projected lineups)", url: NHL_PREVIEW("buffalo-sabres-san-jose-sharks", "october-27-2026") } },
        home: { team: "Sharks", goalie: "Yaroslav Askarov", status: "expected", note: "NHL.com's projected lineup lists Askarov first, with Alex Nedeljkovic as backup. A projection, so listed as expected. Nedeljkovic started Saturday at Boston.", source: { name: "NHL.com (Sabres at Sharks projected lineups)", url: NHL_PREVIEW("buffalo-sabres-san-jose-sharks", "october-27-2026") } },
      },
    ],
  },
  {
    date: "2026-10-26",
    label: "Monday, October 26, 2026",
    updated: "2026-10-27T16:00:00Z",
    games: [
      {
        matchup: "Los Angeles Kings at New York Rangers", time: "7 p.m. ET",
        away: { team: "Kings", goalie: "Darcy Kuemper", status: "confirmed", note: "Confirmed by the official box score: Kuemper started and made 23 saves in the Kings' 6-3 win. He was listed as expected before the game, based on LA Kings Insider's preview.", source: { name: "NHL.com GameCenter (Kings at Rangers, Oct. 26)", url: GC("lak-vs-nyr/2026/10/26/2026020185") } },
        home: { team: "Rangers", goalie: "James Reimer", status: "confirmed", note: "NHL.com's status report said Reimer would make his first start for the Rangers, a day after signing a one-year contract. He started but was pulled after allowing three goals on eight shots in the first period, and Dylan Garand finished the game.", source: { name: "NHL.com (Kings at Rangers projected lineups)", url: "https://www.nhl.com/news/los-angeles-kings-new-york-rangers-game-preview-october-26-2026" } },
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
    updated: "2026-10-27T16:00:00Z",
    games: [
      {
        matchup: "Florida Panthers at Chicago Blackhawks", time: "3 p.m. ET",
        away: { team: "Panthers", goalie: "Akira Schmid", status: "confirmed", note: "Started, as the team preview said he would. Jacob Markstrom is injured (upper body).", source: { name: "NHL.com GameCenter (Panthers at Blackhawks, Oct. 25)", url: GC("fla-vs-chi/2026/10/25/2026020180") } },
        home: { team: "Blackhawks", goalie: "Spencer Knight", status: "confirmed", note: "Knight started, per the NHL.com box score. NHL.com's projection had listed Arvid Soderblom first.", source: { name: "NHL.com GameCenter (Panthers at Blackhawks, Oct. 25)", url: GC("fla-vs-chi/2026/10/25/2026020180") } },
      },
      {
        matchup: "New York Islanders at Dallas Stars", time: "6 p.m. ET",
        away: { team: "Islanders", goalie: "Ilya Sorokin", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: The Islanders' own game preview says Sorokin is expected to start, though unconfirmed. (NHL.com's earlier projection had listed Semyon Varlamov first.)", source: { name: "NHL.com GameCenter (Islanders at Stars, Oct. 25)", url: GC("nyi-vs-dal/2026/10/25/2026020181") } },
        home: { team: "Stars", goalie: "Jake Oettinger", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: Expected per the Islanders' preview and listed first in NHL.com's projected lineup, with Casey DeSmith as backup.", source: { name: "NHL.com GameCenter (Islanders at Stars, Oct. 25)", url: GC("nyi-vs-dal/2026/10/25/2026020181") } },
      },
      {
        matchup: "Montreal Canadiens at Winnipeg Jets (Heritage Classic)", time: "7 p.m. ET",
        away: { team: "Canadiens", goalie: "Jacob Fowler", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: Listed first in goal in NHL.com's projected lineup, ahead of Jakub Dobes. Fowler also started Friday's 4-1 win at Chicago. Sam Montembeault is injured.", source: { name: "NHL.com GameCenter (Canadiens at Jets, Oct. 25)", url: GC("mtl-vs-wpg/2026/10/25/2026020182") } },
        home: { team: "Jets", goalie: "Stuart Skinner", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: Listed first in goal in NHL.com's projected lineup, with Clay Stevenson as backup and Nico Daws a scratch. First game since the Connor Hellebuyck trade.", source: { name: "NHL.com GameCenter (Canadiens at Jets, Oct. 25)", url: GC("mtl-vs-wpg/2026/10/25/2026020182") } },
      },
      {
        matchup: "Colorado Avalanche at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Avalanche", goalie: "Scott Wedgewood", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: Listed first in goal in NHL.com's projected lineup, with Mackenzie Blackwood (Friday's starter) as backup.", source: { name: "NHL.com GameCenter (Avalanche at Predators, Oct. 25)", url: GC("col-vs-nsh/2026/10/25/2026020183") } },
        home: { team: "Predators", goalie: "Justus Annunen", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: NHL.com: Annunen is expected to start after Juuse Saros made 34 saves in Saturday's overtime loss at Pittsburgh.", source: { name: "NHL.com GameCenter (Avalanche at Predators, Oct. 25)", url: GC("col-vs-nsh/2026/10/25/2026020183") } },
      },
      {
        matchup: "Minnesota Wild at Vancouver Canucks", time: "10 p.m. ET",
        away: { team: "Wild", goalie: "Calvin Pickard", status: "confirmed", note: "Coach John Hynes set the back-to-back plan: Jesper Wallstedt started Saturday at Seattle, Pickard starts Sunday.", source: { name: "The Hockey News (Wild)", url: "https://thehockeynews.com/nhl/minnesota-wild/game-day/wild-announce-goalie-plan-for-saturday-sundays-back-to-back" } },
        home: { team: "Canucks", goalie: "Leevi Merilainen", status: "confirmed", note: "Started, per the NHL.com box score. Before the game: Projected to start after Kevin Lankinen played Thursday; listed first in NHL.com's projected lineup.", source: { name: "NHL.com GameCenter (Wild at Canucks, Oct. 25)", url: GC("min-vs-van/2026/10/25/2026020184") } },
      },
    ],
  },
];

export default applyNightOverlays(nights, nightOverlays);
