import connection from "../database/database.js";

async function insertBet(team1_score: number, team2_score: number) {
  return connection.query(
    `INSERT INTO bets (team1_score, team2_score) VALUES ($1, $2)`,
    [team1_score, team2_score]
  );
}

export { insertBet };
