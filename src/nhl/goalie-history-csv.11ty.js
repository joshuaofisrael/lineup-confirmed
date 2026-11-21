import nights from "../_data/nhlNights.js";
import { buildGoalieHistory } from "../../lib/goalie-history.js";

const history = buildGoalieHistory(nights);

export default class {
  data() {
    return {
      permalink: "/nhl/starting-goalies/history.csv",
      date: "2026-11-21",
      updatedAt: "2026-11-21",
    };
  }

  render() {
    return history.csv;
  }
}
