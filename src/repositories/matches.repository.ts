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

export { insertMatch, getMatch, getMatchById, getMatches };
