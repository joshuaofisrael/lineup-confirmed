// Applied at build time, and only once publishAt has passed. The scheduled
// Pages deploy is what makes each block show up with its article.
const REC = {
  caps: "https://www.nhl.com/news/philadelphia-flyers-washington-capitals-game-recap-october-28-2026",
  status: "https://www.nhl.com/news/nhl-status-report-news-and-notes-october-28-2026",
  habs: "https://www.nhl.com/canadiens/news/lines-at-practice-oct-28-2026",
  avs: "https://www.nhl.com/news/new-jersey-devils-colorado-avalanche-game-recap-october-28-2026",
};

export default [
  {
    publishAt: "2026-10-29T11:00:00Z",
    date: "2026-10-28",
    updated: "2026-10-29T11:00:00Z",
    matchup: "Philadelphia Flyers at Washington Capitals",
    away: {
      team: "Flyers",
      goalie: "Joseph Woll",
      status: "confirmed",
      note: "Started and made 25 saves in a 5-2 loss on the second night of a back-to-back, after a 4-3 overtime loss to Columbus on Tuesday. Alex Tuch scored into an empty net for Washington's last goal.",
      source: { name: "NHL.com (Flyers at Capitals recap, Oct. 28)", url: REC.caps },
    },
    home: {
      team: "Capitals",
      goalie: "Logan Thompson",
      status: "confirmed",
      note: "Returned from injured reserve and made 23 saves in a 5-2 win. NHL.com says he was the first goalie off the ice after the morning skate, was activated off injured reserve on Tuesday, and had missed Saturday's overtime win against Buffalo. Mitch Gibson was loaned to Hershey.",
      source: { name: "NHL.com (NHL Status Report, Oct. 29)", url: REC.status },
    },
  },
  {
    publishAt: "2026-10-29T15:00:00Z",
    date: "2026-10-29",
    updated: "2026-10-29T15:00:00Z",
    matchup: "Montreal Canadiens at Dallas Stars",
    away: {
      team: "Canadiens",
      goalie: "Jakub Dobes",
      status: "confirmed",
      note: "Started and made 17 saves on 19 shots in a 5-2 win, per the NHL.com box score. Before the game: Coach Martin St. Louis confirmed after Wednesday's practice in Farmers Branch that Dobes starts Thursday at Dallas. Both Dobes and Jacob Fowler practiced. Puck drop is 8 p.m. ET at American Airlines Center, the last game of a four-game road trip.",
      source: { name: "Montreal Canadiens (lines at practice, Oct. 28)", url: REC.habs },
    },
  },
  {
    publishAt: "2026-10-29T19:00:00Z",
    date: "2026-10-28",
    updated: "2026-10-29T19:00:00Z",
    matchup: "New Jersey Devils at Colorado Avalanche",
    away: {
      team: "Devils",
      goalie: "Jake Allen",
      status: "confirmed",
      note: "Started and made 39 saves in a 5-2 loss. The Devils had won 5-1 at Dallas on Tuesday, and coach Sheldon Keefe called Wednesday a tough back-to-back.",
      source: { name: "NHL.com (Devils at Avalanche recap, Oct. 28)", url: REC.avs },
    },
    home: {
      team: "Avalanche",
      goalie: "Mackenzie Blackwood",
      status: "confirmed",
      note: "Started and made 20 saves in his 300th NHL game. Colorado won 5-2.",
      source: { name: "NHL.com (Devils at Avalanche recap, Oct. 28)", url: REC.avs },
    },
  },
];
