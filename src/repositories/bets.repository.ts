import connection from "../database/database.js";

async function insertBet(
  user_id: number,
  match_id: number,
  team1_score: number,
  team2_score: number
) {
  return connection.query(
    `INSERT INTO bets (user_id, match_id, team1_score, team2_score) VALUES ($1, $2, $3, $4)`,
    [user_id, match_id, team1_score, team2_score]
  );
}

export { insertBet };
