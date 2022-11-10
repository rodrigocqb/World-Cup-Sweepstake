import { QueryResult } from "pg";
import connection from "../database/database.js";
import { BetEntity } from "../protocols/Bet.js";

async function insertBet(
  user_id: number,
  match_id: number,
  team1_score: number,
  team2_score: number
): Promise<QueryResult<BetEntity>> {
  return connection.query(
    `INSERT INTO bets (user_id, match_id, team1_score, team2_score) VALUES ($1, $2, $3, $4)`,
    [user_id, match_id, team1_score, team2_score]
  );
}

export { insertBet };
