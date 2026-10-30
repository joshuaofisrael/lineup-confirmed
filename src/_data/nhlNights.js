import { applyNightOverlays } from "../../lib/night-overlays.js";
import nightOverlays from "./nhlNightOverlays.js";

// One entry per night. Newest first. Each goalie entry: status is "confirmed", "expected" or "unconfirmed".
// Every status must link the team, league or reporter source it relies on. Never guess.
// Timed corrections live in nhlNightOverlays.js and apply only after publishAt.
const GC = (path) => `https://www.nhl.com/gamecenter/${path}`;
const NHL_PREVIEW = (slug, day = "october-25-2026") => `https://www.nhl.com/news/${slug}-game-preview-${day}`;
const nights = [
  {
    date: "2026-10-31",
    label: "Saturday, October 31, 2026",
    updated: "2026-10-30T21:30:00Z",
    games: [
      {
        matchup: "Chicago Blackhawks at Boston Bruins", time: "1 p.m. ET",
        away: { team: "Blackhawks", goalie: "Spencer Knight", status: "expected", note: "Listed first in goal, with Arvid Soderblom second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Knight started Thursday's 4-1 loss at Detroit; Chicago did not practice Friday.", source: { name: "NHL.com (Blackhawks at Bruins preview)", url: NHL_PREVIEW("chicago-blackhawks-boston-bruins", "october-31-2026") } },
        home: { team: "Bruins", goalie: "Jeremy Swayman", status: "expected", note: "Listed first in goal, with Michael DiPietro second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Swayman started Thursday's 4-1 loss at St. Louis.", source: { name: "NHL.com (Blackhawks at Bruins preview)", url: NHL_PREVIEW("chicago-blackhawks-boston-bruins", "october-31-2026") } },
      },
      {
        matchup: "St. Louis Blues at Detroit Red Wings", time: "1 p.m. ET",
        away: { team: "Blues", goalie: "Joel Hofer", status: "expected", note: "Listed first in goal, with Jordan Binnington second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Hofer made 31 saves in Thursday's 4-1 win against Boston.", source: { name: "NHL.com (Blues at Red Wings preview)", url: NHL_PREVIEW("st-louis-blues-detroit-red-wings", "october-31-2026") } },
        home: { team: "Red Wings", goalie: "John Gibson", status: "expected", note: "Listed first in goal, with Daniil Tarasov second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Gibson started Thursday's 4-1 win against Chicago.", source: { name: "NHL.com (Blues at Red Wings preview)", url: NHL_PREVIEW("st-louis-blues-detroit-red-wings", "october-31-2026") } },
      },
      {
        matchup: "Tampa Bay Lightning at Nashville Predators", time: "2 p.m. ET",
        away: { team: "Lightning", goalie: "Andrei Vasilevskiy", status: "expected", note: "Listed first in goal, with Dennis Hildeby second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Vasilevskiy started Thursday's 6-4 win against Winnipeg.", source: { name: "NHL.com (Lightning at Predators preview)", url: NHL_PREVIEW("tampa-bay-lightning-nashville-predators", "october-31-2026") } },
        home: { team: "Predators", goalie: "Juuse Saros", status: "expected", note: "Listed first in goal, with Justus Annunen second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Saros started Thursday's 4-3 loss to Washington.", source: { name: "NHL.com (Lightning at Predators preview)", url: NHL_PREVIEW("tampa-bay-lightning-nashville-predators", "october-31-2026") } },
      },
      {
        matchup: "Edmonton Oilers at New York Islanders", time: "2 p.m. ET",
        away: { team: "Oilers", goalie: "Tristan Jarry", status: "expected", note: "Listed first in goal, with Matt Tomkins second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Jarry made 24 saves in a 4-0 shutout of Calgary on Wednesday.", source: { name: "NHL.com (Oilers at Islanders preview)", url: NHL_PREVIEW("edmonton-oilers-new-york-islanders", "october-31-2026") } },
        home: { team: "Islanders", goalie: "Ilya Sorokin", status: "expected", note: "Listed first in goal, with Semyon Varlamov second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Sorokin started Thursday's 4-3 overtime win at Minnesota.", source: { name: "NHL.com (Oilers at Islanders preview)", url: NHL_PREVIEW("edmonton-oilers-new-york-islanders", "october-31-2026") } },
      },
      {
        matchup: "Buffalo Sabres at Los Angeles Kings", time: "4 p.m. ET",
        away: { team: "Sabres", goalie: "Ukko-Pekka Luukkonen", status: "expected", note: "Listed first in goal, with Colten Ellis second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Ellis started Thursday's 7-6 win at Anaheim.", source: { name: "NHL.com (Sabres at Kings preview)", url: NHL_PREVIEW("buffalo-sabres-los-angeles-kings", "october-31-2026") } },
        home: { team: "Kings", goalie: "Darcy Kuemper", status: "expected", note: "Listed first in goal, with Anton Forsberg second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. NHL.com says Kuemper skipped Friday's practice for maintenance but is expected to play. He started Thursday's 6-5 overtime win against Ottawa.", source: { name: "NHL.com (Sabres at Kings preview)", url: NHL_PREVIEW("buffalo-sabres-los-angeles-kings", "october-31-2026") } },
      },
      {
        matchup: "Ottawa Senators at San Jose Sharks", time: "4 p.m. ET",
        away: { team: "Senators", goalie: "Jonas Johansson", status: "expected", note: "Listed first in goal, with Samuel Ersson second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. Johansson started Thursday at Los Angeles and was replaced by Ersson in a 6-5 overtime loss.", source: { name: "NHL.com (Senators at Sharks preview)", url: NHL_PREVIEW("ottawa-senators-san-jose-sharks", "october-31-2026") } },
        home: { team: "Sharks", goalie: "Yaroslav Askarov", status: "expected", note: "Listed first in goal, with Alex Nedeljkovic second, in NHL.com's projected lineups (Oct. 30). A projection, not an announcement. NHL.com says coach Ryan Warsofsky did not reveal lineup decisions Friday. Askarov started Thursday's 3-2 win against Vancouver.", source: { name: "NHL.com (Senators at Sharks preview)", url: NHL_PREVIEW("ottawa-senators-san-jose-sharks", "october-31-2026") } },
      },
      {
        matchup: "Pittsburgh Penguins at Montreal Canadiens", time: "7 p.m. ET",
        away: { team: "Penguins", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Arturs Silovs started Thursday's 4-3 overtime loss to Utah.", source: { name: "NHL.com GameCenter (Mammoth at Penguins, Oct. 29)", url: GC("uta-vs-pit/2026/10/29/2026020205") } },
        home: { team: "Canadiens", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Jakub Dobes started Thursday's 5-2 win at Dallas.", source: { name: "NHL.com GameCenter (Canadiens at Stars, Oct. 29)", url: GC("mtl-vs-dal/2026/10/29/2026020209") } },
      },
      {
        matchup: "Toronto Maple Leafs at Vancouver Canucks", time: "7 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Sergei Bobrovsky started Wednesday's 5-4 loss at Seattle.", source: { name: "NHL.com GameCenter (Maple Leafs at Kraken, Oct. 28)", url: GC("tor-vs-sea/2026/10/28/2026020202") } },
        home: { team: "Canucks", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Leevi Meril\u00e4inen started Thursday's 3-2 loss at San Jose.", source: { name: "NHL.com GameCenter (Canucks at Sharks, Oct. 29)", url: GC("van-vs-sjs/2026/10/29/2026020213") } },
      },
      {
        matchup: "Columbus Blue Jackets at Dallas Stars", time: "8 p.m. ET",
        away: { team: "Blue Jackets", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Jet Greaves started Thursday's 3-2 loss at Carolina.", source: { name: "NHL.com GameCenter (Blue Jackets at Hurricanes, Oct. 29)", url: GC("cbj-vs-car/2026/10/29/2026020206") } },
        home: { team: "Stars", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Jake Oettinger started Thursday's 5-2 loss to Montreal.", source: { name: "NHL.com GameCenter (Canadiens at Stars, Oct. 29)", url: GC("mtl-vs-dal/2026/10/29/2026020209") } },
      },
      {
        matchup: "Calgary Flames at Colorado Avalanche", time: "10 p.m. ET",
        away: { team: "Flames", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Second night of a back-to-back: Dustin Wolf starts Friday at home against Seattle, per Flames radio's Pat Steinberg, and NHL.com reports Devin Cooley (lower body) is week to week and was placed on injured reserve Friday; Arsenii Sergeev was recalled.", source: { name: "NHL.com (Kraken at Flames preview)", url: NHL_PREVIEW("seattle-kraken-calgary-flames", "october-30-2026") } },
        home: { team: "Avalanche", goalie: "Not announced", status: "unconfirmed", note: "No starter reported at our last check (Oct. 30). Mackenzie Blackwood started Wednesday's 5-2 win against New Jersey.", source: { name: "NHL.com GameCenter (Devils at Avalanche, Oct. 28)", url: GC("njd-vs-col/2026/10/28/2026020201") } },
      },
    ],
  },
  {
    date: "2026-10-30",
    label: "Friday, October 30, 2026",
    updated: "2026-10-30T21:30:00Z",
    games: [
      {
        matchup: "New Jersey Devils at Vegas Golden Knights", time: "6 p.m. ET",
        away: { team: "Devils", goalie: "Connor Hellebuyck", status: "expected", note: "NHL.com says the Devils are likely to go back to Hellebuyck, who made 17 saves in a 5-1 win at Dallas on Tuesday, for what would be his second start for New Jersey. Jake Allen started Wednesday at Colorado. Last game of a three-game trip.", source: { name: "NHL.com (NHL On Tap, Oct. 30)", url: "https://www.nhl.com/news/nhl-on-tap-news-and-notes-october-30-2026" } },
        home: { team: "Golden Knights", goalie: "Adin Hill", status: "expected", note: "Listed first in goal, with Cameron Whitehead second, in NHL.com's projected lineups. The same preview says Carter Hart (undisclosed) has skated but his status is unclear.", source: { name: "NHL.com (Devils at Golden Knights preview)", url: NHL_PREVIEW("new-jersey-devils-vegas-golden-knights", "october-30-2026") } },
      },
      {
        matchup: "Winnipeg Jets at Florida Panthers", time: "7 p.m. ET",
        away: { team: "Jets", goalie: "Nico Daws", status: "expected", note: "NHL.com's preview lists Daws first in goal and says he could start; the Jets did not hold a morning skate. Second night of a back-to-back after Thursday's 6-4 loss at Tampa Bay, where Daws made nine saves in relief of Stuart Skinner.", source: { name: "NHL.com (Jets at Panthers preview)", url: NHL_PREVIEW("winnipeg-jets-florida-panthers", "october-30-2026") } },
        home: { team: "Panthers", goalie: "Akira Schmid", status: "confirmed", note: "\"Akira Schmid will be in net tonight against Winnipeg, per Coach Maurice,\" the Panthers posted on game day. NHL.com's preview says Jacob Markstrom (upper body) has missed four straight games and could return sometime next week.", source: { name: "Florida Panthers on X", url: "https://x.com/FlaPanthers/status/2116180477572743503" } },
      },
      {
        matchup: "Seattle Kraken at Calgary Flames", time: "8 p.m. ET",
        away: { team: "Kraken", goalie: "Philipp Grubauer", status: "expected", note: "Should start for a second straight game based on the morning skate, the Kraken's Geoff Baker wrote on the team site; NHL.com's projected lineups also list Grubauer first, with Joey Daccord second. Not a coach announcement. Grubauer started Wednesday's 5-4 win against Toronto.", source: { name: "Seattle Kraken (game preview, Oct. 30)", url: "https://www.nhl.com/kraken/news/seattle-kraken-at-calgary-flames-game-preview-projected-lines-103026" } },
        home: { team: "Flames", goalie: "Dustin Wolf", status: "confirmed", note: "\"Dustin Wolf starting tonight vs. Seattle,\" Flames radio's Pat Steinberg posted, his first start since Oct. 15 at Vegas. Devin Cooley left Wednesday's game at Edmonton with a lower-body injury, and the Flames recalled goalie Arsenii Sergeev from AHL Calgary on Friday.", source: { name: "Pat Steinberg (Flames radio) on X", url: "https://x.com/SteinbergYYC/status/2116188315888324728" } },
      },
    ],
  },
  {
    date: "2026-10-29",
    label: "Thursday, October 29, 2026",
    updated: "2026-10-30T15:30:00Z",
    games: [
      {
        matchup: "Winnipeg Jets at Tampa Bay Lightning", time: "7 p.m. ET",
        away: { team: "Jets", goalie: "Stuart Skinner", status: "confirmed", note: "Started and stopped 16 of 21 shots in 40:00 before Nico Daws took over and made nine saves on nine shots in a 6-4 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Jets at Lightning, Oct. 29)", url: GC("wpg-vs-tbl/2026/10/29/2026020204") } },
        home: { team: "Lightning", goalie: "Andrei Vasilevskiy", status: "confirmed", note: "Started and made 17 saves on 21 shots in a 6-4 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Jets at Lightning, Oct. 29)", url: GC("wpg-vs-tbl/2026/10/29/2026020204") } },
      },
      {
        matchup: "Utah Mammoth at Pittsburgh Penguins", time: "7 p.m. ET",
        away: { team: "Mammoth", goalie: "Sebastian Cossa", status: "confirmed", note: "Started and made 31 saves on 34 shots in a 4-3 overtime win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Mammoth at Penguins, Oct. 29)", url: GC("uta-vs-pit/2026/10/29/2026020205") } },
        home: { team: "Penguins", goalie: "Arturs Silovs", status: "confirmed", note: "Started and made 30 saves on 34 shots in a 4-3 overtime loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Mammoth at Penguins, Oct. 29)", url: GC("uta-vs-pit/2026/10/29/2026020205") } },
      },
      {
        matchup: "Columbus Blue Jackets at Carolina Hurricanes", time: "7 p.m. ET",
        away: { team: "Blue Jackets", goalie: "Jet Greaves", status: "confirmed", note: "Started and made 24 saves on 27 shots in a 3-2 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Blue Jackets at Hurricanes, Oct. 29)", url: GC("cbj-vs-car/2026/10/29/2026020206") } },
        home: { team: "Hurricanes", goalie: "Pyotr Kochetkov", status: "confirmed", note: "Started and made 24 saves on 26 shots in a 3-2 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Blue Jackets at Hurricanes, Oct. 29)", url: GC("cbj-vs-car/2026/10/29/2026020206") } },
      },
      {
        matchup: "Chicago Blackhawks at Detroit Red Wings", time: "7:30 p.m. ET",
        away: { team: "Blackhawks", goalie: "Spencer Knight", status: "confirmed", note: "Started and made 27 saves on 30 shots in a 4-1 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Blackhawks at Red Wings, Oct. 29)", url: GC("chi-vs-det/2026/10/29/2026020203") } },
        home: { team: "Red Wings", goalie: "John Gibson", status: "confirmed", note: "Started and made 18 saves on 19 shots in a 4-1 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Blackhawks at Red Wings, Oct. 29)", url: GC("chi-vs-det/2026/10/29/2026020203") } },
      },
      {
        matchup: "Boston Bruins at St. Louis Blues", time: "8 p.m. ET",
        away: { team: "Bruins", goalie: "Jeremy Swayman", status: "confirmed", note: "Started and made 14 saves on 18 shots in a 4-1 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Bruins at Blues, Oct. 29)", url: GC("bos-vs-stl/2026/10/29/2026020207") } },
        home: { team: "Blues", goalie: "Joel Hofer", status: "confirmed", note: "Started and made 31 saves on 32 shots in a 4-1 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Bruins at Blues, Oct. 29)", url: GC("bos-vs-stl/2026/10/29/2026020207") } },
      },
      {
        matchup: "Washington Capitals at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Capitals", goalie: "Charlie Lindgren", status: "confirmed", note: "Started and made 24 saves on 27 shots in a 4-3 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Capitals at Predators, Oct. 29)", url: GC("wsh-vs-nsh/2026/10/29/2026020208") } },
        home: { team: "Predators", goalie: "Juuse Saros", status: "confirmed", note: "Started and made 25 saves on 29 shots in a 4-3 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Capitals at Predators, Oct. 29)", url: GC("wsh-vs-nsh/2026/10/29/2026020208") } },
      },
      {
        matchup: "Montreal Canadiens at Dallas Stars", time: "8 p.m. ET",
        away: { team: "Canadiens", goalie: "Jakub Dobes", status: "confirmed", note: "Started and made 17 saves on 19 shots in a 5-2 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Canadiens at Stars, Oct. 29)", url: GC("mtl-vs-dal/2026/10/29/2026020209") } },
        home: { team: "Stars", goalie: "Jake Oettinger", status: "confirmed", note: "Started and made 16 saves on 20 shots in a 5-2 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Canadiens at Stars, Oct. 29)", url: GC("mtl-vs-dal/2026/10/29/2026020209") } },
      },
      {
        matchup: "New York Islanders at Minnesota Wild", time: "8 p.m. ET",
        away: { team: "Islanders", goalie: "Ilya Sorokin", status: "confirmed", note: "Started and made 22 saves on 25 shots in a 4-3 overtime win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Islanders at Wild, Oct. 29)", url: GC("nyi-vs-min/2026/10/29/2026020210") } },
        home: { team: "Wild", goalie: "Jesper Wallstedt", status: "confirmed", note: "Started and made 22 saves on 26 shots in a 4-3 overtime loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Islanders at Wild, Oct. 29)", url: GC("nyi-vs-min/2026/10/29/2026020210") } },
      },
      {
        matchup: "Buffalo Sabres at Anaheim Ducks", time: "10 p.m. ET",
        away: { team: "Sabres", goalie: "Colten Ellis", status: "confirmed", note: "Started and made 29 saves on 35 shots in a 7-6 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Sabres at Ducks, Oct. 29)", url: GC("buf-vs-ana/2026/10/29/2026020211") } },
        home: { team: "Ducks", goalie: "Ville Husso", status: "confirmed", note: "Started and made 24 saves on 31 shots in a 7-6 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Sabres at Ducks, Oct. 29)", url: GC("buf-vs-ana/2026/10/29/2026020211") } },
      },
      {
        matchup: "Ottawa Senators at Los Angeles Kings", time: "10 p.m. ET",
        away: { team: "Senators", goalie: "Jonas Johansson", status: "confirmed", note: "Started and stopped 12 of 16 shots in 30:54 before Samuel Ersson took over and made 20 saves on 22 shots in a 6-5 overtime loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Senators at Kings, Oct. 29)", url: GC("ott-vs-lak/2026/10/29/2026020212") } },
        home: { team: "Kings", goalie: "Darcy Kuemper", status: "confirmed", note: "Started and made 17 saves on 22 shots in a 6-5 overtime win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Senators at Kings, Oct. 29)", url: GC("ott-vs-lak/2026/10/29/2026020212") } },
      },
      {
        matchup: "Vancouver Canucks at San Jose Sharks", time: "10 p.m. ET",
        away: { team: "Canucks", goalie: "Leevi Meriläinen", status: "confirmed", note: "Started and made 21 saves on 24 shots in a 3-2 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Canucks at Sharks, Oct. 29)", url: GC("van-vs-sjs/2026/10/29/2026020213") } },
        home: { team: "Sharks", goalie: "Yaroslav Askarov", status: "confirmed", note: "Started and made 23 saves on 25 shots in a 3-2 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Canucks at Sharks, Oct. 29)", url: GC("van-vs-sjs/2026/10/29/2026020213") } },
      },
    ],
  },
  {
    date: "2026-10-28",
    label: "Wednesday, October 28, 2026",
    updated: "2026-10-30T15:30:00Z",
    games: [
      {
        matchup: "Philadelphia Flyers at Washington Capitals", time: "7:30 p.m. ET",
        away: { team: "Flyers", goalie: "Not announced", status: "unconfirmed", note: "No starter named. Second night of a back-to-back: Dan Vladar starts Tuesday against Columbus, per coach Rick Tocchet. No Wednesday starter has been named. Joseph Woll started Saturday against the Ducks.", source: { name: "Charlie O'Connor, PHLY Sports, on X (Oct. 27)", url: "https://x.com/charlieo_conn/status/2115088794047152486" } },
        home: { team: "Capitals", goalie: "Not announced", status: "unconfirmed", note: "NHL.com's status report lists Logan Thompson (lower body) as probable to return Wednesday after a second straight full practice Tuesday. Coach Spencer Carbery said the team would see how he came out of practice before setting a plan. Not an announced start, so unconfirmed. Charlie Lindgren started Saturday's overtime win against Buffalo.", source: { name: "NHL.com (NHL Status Report, Oct. 27)", url: "https://www.nhl.com/news/nhl-status-report-news-and-notes-october-27-2026" } },
      },
      {
        matchup: "Calgary Flames at Edmonton Oilers", time: "8:30 p.m. ET",
        away: { team: "Flames", goalie: "Devin Cooley", status: "confirmed", note: "Started and stopped 8 of 9 shots in 20:00 before Dustin Wolf took over and made 20 saves on 23 shots in a 4-0 loss, per the NHL.com box score. NHL.com's recap says Cooley left with a lower-body injury after a collision in the crease in the first period.", source: { name: "NHL.com GameCenter (Flames at Oilers, Oct. 28)", url: GC("cgy-vs-edm/2026/10/28/2026020200") } },
        home: { team: "Oilers", goalie: "Tristan Jarry", status: "confirmed", note: "Started and made 24 saves on 24 shots in a 4-0 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Flames at Oilers, Oct. 28)", url: GC("cgy-vs-edm/2026/10/28/2026020200") } },
      },
      {
        matchup: "New Jersey Devils at Colorado Avalanche", time: "9 p.m. ET",
        away: { team: "Devils", goalie: "Not announced", status: "unconfirmed", note: "Second night of a back-to-back. Connor Hellebuyck makes his Devils debut Tuesday at Dallas, per coach Sheldon Keefe; New Jersey has not said who starts in Colorado. Jake Allen started Saturday against the Kings.", source: { name: "NHL.com (Hellebuyck to make first start for Devils)", url: "https://www.nhl.com/news/new-jersey-goalie-connor-hellebuyck-to-make-first-start-devils-debut-tonight-against-stars" } },
        home: { team: "Avalanche", goalie: "Not announced", status: "unconfirmed", note: "No projection reported yet. Scott Wedgewood started Sunday's 6-2 loss at Nashville.", source: { name: "NHL.com GameCenter (Avalanche at Predators, Oct. 25)", url: GC("col-vs-nsh/2026/10/25/2026020183") } },
      },
      {
        matchup: "Toronto Maple Leafs at Seattle Kraken", time: "10 p.m. ET",
        away: { team: "Maple Leafs", goalie: "Sergei Bobrovsky", status: "confirmed", note: "Started and made 12 saves on 17 shots in a 5-4 loss, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Maple Leafs at Kraken, Oct. 28)", url: GC("tor-vs-sea/2026/10/28/2026020202") } },
        home: { team: "Kraken", goalie: "Philipp Grubauer", status: "confirmed", note: "Started and made 18 saves on 22 shots in a 5-4 win, per the NHL.com box score.", source: { name: "NHL.com GameCenter (Maple Leafs at Kraken, Oct. 28)", url: GC("tor-vs-sea/2026/10/28/2026020202") } },
      },
    ],
  },
  {
    date: "2026-10-27",
    label: "Tuesday, October 27, 2026",
    updated: "2026-10-30T15:30:00Z",
    games: [
      {
        matchup: "Columbus Blue Jackets at Philadelphia Flyers", time: "7 p.m. ET",
        away: { team: "Blue Jackets", goalie: "Cam Talbot", status: "confirmed", note: "Started and made 29 saves on 32 shots in a 4-3 overtime win, per the NHL.com box score. Before the game: Columbus reporter Dave Maetzold, relaying coach Rick Bowness's morning update, reported that Talbot gets a second straight start after Saturday's game against Vegas. NHL.com's projected lineup also lists him first.", source: { name: "NHL.com GameCenter (Blue Jackets at Flyers, Oct. 27)", url: GC("cbj-vs-phi/2026/10/27/2026020188") } },
        home: { team: "Flyers", goalie: "Dan Vladar", status: "confirmed", note: "Started and made 11 saves on 15 shots in a 4-3 overtime loss, per the NHL.com box score. Before the game: Coach Rick Tocchet said after the morning skate that Vladar starts, as PHLY Sports' Charlie O'Connor and the Inquirer's Jackie Spiegel reported. Joseph Woll started Saturday against the Ducks.", source: { name: "NHL.com GameCenter (Blue Jackets at Flyers, Oct. 27)", url: GC("cbj-vs-phi/2026/10/27/2026020188") } },
      },
      {
        matchup: "Boston Bruins at Carolina Hurricanes", time: "8 p.m. ET",
        away: { team: "Bruins", goalie: "Jeremy Swayman", status: "confirmed", note: "Started and made 28 saves on 30 shots in a 2-1 loss, per the NHL.com box score. Before the game: NESN's Adam Pellerin posted \\\"Jeremy Swayman in net\\\" on Tuesday. That is a reporter's lineup note rather than a coach's quote, so he is listed as expected. Swayman also started Saturday against the Sharks.", source: { name: "NHL.com GameCenter (Bruins at Hurricanes, Oct. 27)", url: GC("bos-vs-car/2026/10/27/2026020189") } },
        home: { team: "Hurricanes", goalie: "Pyotr Kochetkov", status: "confirmed", note: "Started and made 15 saves on 16 shots in a 2-1 win, per the NHL.com box score. Before the game: Kochetkov was in the starter's crease at Carolina's morning skate, with Brandon Bussi in the backup spot, and NHL.com's projected lineup lists him first. Not a coach's announcement, so listed as expected. He also started Saturday's 4-0 win at St. Louis.", source: { name: "NHL.com GameCenter (Bruins at Hurricanes, Oct. 27)", url: GC("bos-vs-car/2026/10/27/2026020189") } },
      },
      {
        matchup: "Los Angeles Kings at Chicago Blackhawks", time: "8 p.m. ET",
        away: { team: "Kings", goalie: "Anton Forsberg", status: "confirmed", note: "Started and made 25 saves on 27 shots in a 2-1 loss, per the NHL.com box score. Before the game: Second night of a back-to-back. The Kings did not hold a morning skate; NHL.com says Forsberg is expected to start after Darcy Kuemper made 23 saves in Monday's win at the Rangers.", source: { name: "NHL.com GameCenter (Kings at Blackhawks, Oct. 27)", url: GC("lak-vs-chi/2026/10/27/2026020190") } },
        home: { team: "Blackhawks", goalie: "Spencer Knight", status: "confirmed", note: "Started and made 25 saves on 26 shots in a 2-1 win, per the NHL.com box score. Before the game: NHL.com says Knight is expected to make his seventh straight start, and Charlie Roumeliotis reported he worked in the starter's net at the morning skate. Not a coach's announcement, so listed as expected.", source: { name: "NHL.com GameCenter (Kings at Blackhawks, Oct. 27)", url: GC("lak-vs-chi/2026/10/27/2026020190") } },
      },
      {
        matchup: "Montreal Canadiens at St. Louis Blues", time: "8 p.m. ET",
        away: { team: "Canadiens", goalie: "Jacob Fowler", status: "confirmed", note: "Started and made 46 saves on 46 shots in a 2-0 win, per the NHL.com box score. Before the game: The Canadiens' official X account posted that Fowler starts. NHL.com's earlier projection had listed Jakub Dobes first; the team announcement takes precedence. Fowler also started Sunday at the Jets.", source: { name: "NHL.com GameCenter (Canadiens at Blues, Oct. 27)", url: GC("mtl-vs-stl/2026/10/27/2026020191") } },
        home: { team: "Blues", goalie: "Jordan Binnington", status: "confirmed", note: "Started and made 19 saves on 21 shots in a 2-0 loss, per the NHL.com box score. Before the game: NHL.com's game-day status report: \\\"Binnington starts for the first time since Oct. 17.\\\" He was also in the starter's net at the morning skate, the Post-Dispatch's Matthew DeFranks reported. Joel Hofer started Saturday.", source: { name: "NHL.com GameCenter (Canadiens at Blues, Oct. 27)", url: GC("mtl-vs-stl/2026/10/27/2026020191") } },
      },
      {
        matchup: "New York Islanders at Nashville Predators", time: "8 p.m. ET",
        away: { team: "Islanders", goalie: "Semyon Varlamov", status: "confirmed", note: "Started and made 20 saves on 23 shots in a 4-3 shootout win, per the NHL.com box score. Before the game: Stefen Rosner reported that Varlamov gets the start tonight, and NHL.com's projected lineup lists him first. Ilya Sorokin started Sunday at Dallas.", source: { name: "NHL.com GameCenter (Islanders at Predators, Oct. 27)", url: GC("nyi-vs-nsh/2026/10/27/2026020192") } },
        home: { team: "Predators", goalie: "Juuse Saros", status: "confirmed", note: "Started and made 24 saves on 27 shots in a 4-3 shootout loss, per the NHL.com box score. Before the game: Saros was in the starter's crease at Nashville's morning skate, Stefen Rosner reported, and NHL.com's projected lineup lists him first. Not a coach's announcement, so listed as expected. Justus Annunen started Sunday against the Avalanche.", source: { name: "NHL.com GameCenter (Islanders at Predators, Oct. 27)", url: GC("nyi-vs-nsh/2026/10/27/2026020192") } },
      },
      {
        matchup: "New Jersey Devils at Dallas Stars", time: "8 p.m. ET",
        away: { team: "Devils", goalie: "Connor Hellebuyck", status: "confirmed", note: "Started and made 17 saves on 18 shots in a 5-1 win, per the NHL.com box score. Before the game: Coach Sheldon Keefe: \\\"He is going tonight.\\\" Hellebuyck makes his Devils debut four days after the trade from Winnipeg; it is his first NHL game since April 13. Jake Allen started Saturday against the Kings.", source: { name: "NHL.com GameCenter (Devils at Stars, Oct. 27)", url: GC("njd-vs-dal/2026/10/27/2026020193") } },
        home: { team: "Stars", goalie: "Casey DeSmith", status: "confirmed", note: "Started and made 22 saves on 27 shots in a 5-1 loss, per the NHL.com box score. Before the game: Stars radio analyst Bruce LeVine reported that DeSmith starts against New Jersey, and NHL.com's projected lineup agrees. Jake Oettinger started Sunday against the Islanders.", source: { name: "NHL.com GameCenter (Devils at Stars, Oct. 27)", url: GC("njd-vs-dal/2026/10/27/2026020193") } },
      },
      {
        matchup: "Florida Panthers at Winnipeg Jets", time: "8 p.m. ET",
        away: { team: "Panthers", goalie: "Akira Schmid", status: "confirmed", note: "Started and made 24 saves on 25 shots in a 5-1 win, per the NHL.com box score. Before the game: The Panthers' official X account posted that Schmid starts, per coach Paul Maurice. He also started Sunday at the Blackhawks.", source: { name: "NHL.com GameCenter (Panthers at Jets, Oct. 27)", url: GC("fla-vs-wpg/2026/10/27/2026020194") } },
        home: { team: "Jets", goalie: "Clay Stevenson", status: "confirmed", note: "Started and made 19 saves on 24 shots in a 5-1 loss, per the NHL.com box score. Before the game: Stevenson took warm-up shots in the starter's net at the morning skate, and Jets broadcaster Mitchell Clinton and CJOB's Kelly Moore both pointed to him getting the call. NHL.com's projected lineup lists Stuart Skinner first, so the reports conflict; listed as expected until the team confirms. Skinner started Sunday against the Canadiens.", source: { name: "NHL.com GameCenter (Panthers at Jets, Oct. 27)", url: GC("fla-vs-wpg/2026/10/27/2026020194") } },
      },
      {
        matchup: "Minnesota Wild at Utah Mammoth", time: "9 p.m. ET",
        away: { team: "Wild", goalie: "Jesper Wallstedt", status: "confirmed", note: "Started and made 26 saves on 27 shots in a 3-1 win, per the NHL.com box score. Before the game: Wild radio's Joe O'Donnell reported that coach John Hynes confirmed Wallstedt starts. Calvin Pickard started Sunday at the Canucks.", source: { name: "NHL.com GameCenter (Wild at Mammoth, Oct. 27)", url: GC("min-vs-uta/2026/10/27/2026020195") } },
        home: { team: "Mammoth", goalie: "Karel Vejmelka", status: "confirmed", note: "Started and made 28 saves on 31 shots in a 3-1 loss, per the NHL.com box score. Before the game: Vejmelka was first off the ice at the morning skate, KSL Sports reported, and NHL.com's projected lineup lists him first. Not a coach's announcement, so listed as expected. He also started Saturday against the Lightning.", source: { name: "NHL.com GameCenter (Wild at Mammoth, Oct. 27)", url: GC("min-vs-uta/2026/10/27/2026020195") } },
      },
      {
        matchup: "Ottawa Senators at Vegas Golden Knights", time: "10 p.m. ET",
        away: { team: "Senators", goalie: "Jonas Johansson", status: "confirmed", note: "Started and made 25 saves on 27 shots in a 4-1 loss, per the NHL.com box score. Before the game: Coach Travis Green announced the same lineup, with Johansson starting again, Jackson Starr reported. Johansson also started Saturday against the Rangers.", source: { name: "NHL.com GameCenter (Senators at Golden Knights, Oct. 27)", url: GC("ott-vs-vgk/2026/10/27/2026020196") } },
        home: { team: "Golden Knights", goalie: "Adin Hill", status: "confirmed", note: "Started and made 25 saves on 26 shots in a 4-1 win, per the NHL.com box score. Before the game: NHL.com's status report: Carter Hart was injured during the morning skate and is being evaluated, and Hill will start. Hart started Saturday at Columbus.", source: { name: "NHL.com GameCenter (Senators at Golden Knights, Oct. 27)", url: GC("ott-vs-vgk/2026/10/27/2026020196") } },
      },
      {
        matchup: "Vancouver Canucks at Anaheim Ducks", time: "10 p.m. ET",
        away: { team: "Canucks", goalie: "Leevi Meriläinen", status: "confirmed", note: "Started and made 18 saves on 23 shots in a 6-5 overtime win, per the NHL.com box score. Before the game: The Canucks did not hold a morning skate. NHL.com's projected lineup lists Meril\\u00e4inen first, with Kevin Lankinen as backup and Thatcher Demko injured. A projection, so listed as expected. He also started Sunday against the Wild.", source: { name: "NHL.com GameCenter (Canucks at Ducks, Oct. 27)", url: GC("van-vs-ana/2026/10/27/2026020197") } },
        home: { team: "Ducks", goalie: "Lukas Dostal", status: "confirmed", note: "Started and made 27 saves on 33 shots in a 6-5 overtime loss, per the NHL.com box score. Before the game: Coach Joel Quenneville said Dostal starts, Derek Lee and Zach Cavanagh reported. Dostal also started Saturday's 5-4 win at Philadelphia.", source: { name: "NHL.com GameCenter (Canucks at Ducks, Oct. 27)", url: GC("van-vs-ana/2026/10/27/2026020197") } },
      },
      {
        matchup: "Buffalo Sabres at San Jose Sharks", time: "10:30 p.m. ET",
        away: { team: "Sabres", goalie: "Colten Ellis", status: "confirmed", note: "Started and made 23 saves on 23 shots in a 2-0 win, per the NHL.com box score. Before the game: NHL.com's projected lineup lists Ellis first, with Ukko-Pekka Luukkonen as backup. A projection, so listed as expected. Luukkonen started Saturday at Washington.", source: { name: "NHL.com GameCenter (Sabres at Sharks, Oct. 27)", url: GC("buf-vs-sjs/2026/10/27/2026020198") } },
        home: { team: "Sharks", goalie: "Yaroslav Askarov", status: "confirmed", note: "Started and made 39 saves on 40 shots in a 2-0 loss, per the NHL.com box score. Before the game: NHL.com's projected lineup lists Askarov first, with Alex Nedeljkovic as backup. A projection, so listed as expected. Nedeljkovic started Saturday at Boston.", source: { name: "NHL.com GameCenter (Sabres at Sharks, Oct. 27)", url: GC("buf-vs-sjs/2026/10/27/2026020198") } },
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
