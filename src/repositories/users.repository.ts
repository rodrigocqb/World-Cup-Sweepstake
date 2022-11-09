import connection from "../database/database.js";

async function insertUser(name: string) {
  return connection.query(`INSERT INTO user (name) VALUES ($1)`, [name]);
}

export { insertUser };
