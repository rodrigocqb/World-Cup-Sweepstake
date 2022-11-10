import { QueryResult } from "pg";
import connection from "../database/database.js";
import { MatchEntity } from "../protocols/Match.js";

async function insertMatch(
  team1: string,
  team2: string
): Promise<QueryResult<MatchEntity>> {
  return connection.query(
    `INSERT INTO matches (team1, team2) VALUES ($1, $2);`,
    [team1, team2]
  );
}

async function getMatch(
  team1: string,
  team2: string
): Promise<QueryResult<MatchEntity>> {
  return connection.query(
    `SELECT * FROM matches WHERE team1 = $1 AND team2 = $2;`,
    [team1, team2]
  );
}

async function getMatchById(id: number): Promise<QueryResult<MatchEntity>> {
  return connection.query(`SELECT * FROM matches WHERE id = $1`, [id]);
}

async function getMatches(): Promise<QueryResult<MatchEntity>> {
  return connection.query(`SELECT * FROM matches;`);
}

async function updateMatchAndBetStatus(
  match_id: number,
  team1_score: number,
  team2_score: number
): Promise<QueryResult> {
  await connection.query(`UPDATE matches SET status = FALSE WHERE id = $1`, [
    match_id,
  ]);
  await connection.query(
    `UPDATE bets SET status = TRUE WHERE (match_id = $1 AND cancelled = FALSE AND team1_score = $2 AND team2_score = $3)`,
    [match_id, team1_score, team2_score]
  );
  return connection.query(
    `UPDATE bets SET status = FALSE WHERE (match_id = $1 AND cancelled = FALSE AND (team1_score <> $2 OR team2_score <> $3))`,
    [match_id, team1_score, team2_score]
  );
}

export {
  insertMatch,
  getMatch,
  getMatchById,
  getMatches,
  updateMatchAndBetStatus,
};
