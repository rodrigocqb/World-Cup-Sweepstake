import { QueryResult } from "pg";
import connection from "../database/database.js";
import { UserEntity } from "../protocols/User.js";

async function insertUser(name: string): Promise<QueryResult<UserEntity>> {
  return connection.query(`INSERT INTO users (name) VALUES ($1);`, [name]);
}

async function getUser(name: string): Promise<QueryResult<UserEntity>> {
  return connection.query(`SELECT * FROM users WHERE name = $1;`, [name]);
}

export { insertUser, getUser };
