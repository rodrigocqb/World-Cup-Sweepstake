import connection from "../database/database.js";

async function insertMatch(team1: string, team2: string) {
  return connection.query(
    `INSERT INTO matches (team1, team2) VALUES ($1, $2);`,
    [team1, team2]
  );
}

async function getMatch(team1: string, team2: string) {
  return connection.query(
    `SELECT * FROM matches WHERE team1 = $1 AND team2 = $2;`,
    [team1, team2]
  );
}

async function getMatches() {
  return connection.query(`SELECT * FROM matches;`);
}

export { insertMatch, getMatch, getMatches };
