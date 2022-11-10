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
    `INSERT INTO bets (user_id, match_id, team1_score, team2_score) VALUES ($1, $2, $3, $4);`,
    [user_id, match_id, team1_score, team2_score]
  );
}

async function getUserBetsById(
  user_id: number
): Promise<QueryResult<BetEntity>> {
  return connection.query(
    `SELECT * FROM bets WHERE user_id = $1 AND cancelled = FALSE;`,
    [user_id]
  );
}

async function getBet(id: number): Promise<QueryResult<BetEntity>> {
  return connection.query(`SELECT * FROM bets WHERE id = $1;`, [id]);
}

async function upsertBet(
  id: number,
  user_id: number,
  match_id: number,
  team1_score: number,
  team2_score: number
): Promise<QueryResult<BetEntity>> {
  await connection.query(`UPDATE bets SET cancelled = TRUE WHERE id = $1;`, [
    id,
  ]);
  return connection.query(
    `INSERT INTO bets (user_id, match_id, team1_score, team2_score) VALUES ($1, $2, $3, $4);`,
    [user_id, match_id, team1_score, team2_score]
  );
}

async function deleteBet(id: number): Promise<QueryResult<BetEntity>> {
  return connection.query(`DELETE FROM bets WHERE id = $1;`, [id]);
}

async function getUsersRanking() {
  return connection.query(`SELECT users.id, users.name, 
  COUNT(bets.id) AS correct_bets
  FROM users LEFT JOIN bets ON users.id = bets.user_id
  WHERE bets.status = TRUE
  GROUP BY users.id
  ORDER BY correct_bets DESC;
  `);
}

export {
  insertBet,
  getUserBetsById,
  getBet,
  upsertBet,
  deleteBet,
  getUsersRanking,
};
