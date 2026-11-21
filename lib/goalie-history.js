// The citable file is the nightly board, narrowed to confirmed starters whose
// source is an NHL.com or club page. Reporter posts stay on the board.

const LEAGUE_HOST = /(^|\.)nhl\.com$|(^|\.)nhle\.com$/i;

export function isLeagueOrClubUrl(url) {
  try {
    const host = new URL(String(url)).hostname;
    return LEAGUE_HOST.test(host);
  } catch {
    return false;
  }
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

const CSV_HEADER = [
  "date",
  "matchup",
  "time_et",
  "side",
  "team",
  "goalie",
  "status",
  "source_name",
  "source_url",
  "board_updated",
];

export function toCsv(rows) {
  const lines = [CSV_HEADER.join(",")];
  for (const row of rows) {
    lines.push(
      [
        row.date,
        row.matchup,
        row.time,
        row.side,
        row.team,
        row.goalie,
        row.status,
        row.sourceName,
        row.sourceUrl,
        row.boardUpdated,
      ]
        .map(csvCell)
        .join(","),
    );
  }
  return `${lines.join("\n")}\n`;
}

export function buildGoalieHistory(nights) {
  const rows = [];
  let confirmedNonPrimary = 0;
  let expected = 0;
  let unconfirmed = 0;
  const ordered = [...(nights || [])].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  for (const night of ordered) {
    for (const game of night.games || []) {
      for (const side of ["away", "home"]) {
        const entry = game?.[side];
        if (!entry) continue;
        if (entry.status === "expected") {
          expected += 1;
          continue;
        }
        if (entry.status === "unconfirmed") {
          unconfirmed += 1;
          continue;
        }
        if (entry.status !== "confirmed") continue;
        const sourceUrl = entry.source?.url || "";
        if (!isLeagueOrClubUrl(sourceUrl)) {
          confirmedNonPrimary += 1;
          continue;
        }
        rows.push({
          date: night.date,
          label: night.label || night.date,
          matchup: game.matchup || "",
          time: game.time || "",
          side,
          team: entry.team || "",
          goalie: entry.goalie || "",
          status: "confirmed",
          sourceName: entry.source?.name || "",
          sourceUrl,
          boardUpdated: night.updated || "",
        });
      }
    }
  }

  const dates = [...new Set(rows.map((row) => row.date))].sort();
  const boardDates = ordered.map((night) => night.date).filter(Boolean).sort();
  return {
    rows,
    confirmedNonPrimary,
    expected,
    unconfirmed,
    coverageStart: dates[0] || "",
    coverageEnd: dates[dates.length - 1] || "",
    boardStart: boardDates[0] || "",
    boardEnd: boardDates[boardDates.length - 1] || "",
    csv: toCsv(rows),
  };
}
