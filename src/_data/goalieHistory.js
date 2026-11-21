import nights from "./nhlNights.js";
import { buildGoalieHistory } from "../../lib/goalie-history.js";

const history = buildGoalieHistory(nights);

export default history;
