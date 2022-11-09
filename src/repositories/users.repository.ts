import connection from "../database/database.js";

async function insertUser(name: string) {
  return connection.query(`INSERT INTO users (name) VALUES ($1)`, [name]);
}

async function getUser(name: string) {
  return connection.query(`SELECT FROM users WHERE name = $1`, [name]);
}

export { insertUser, getUser };
