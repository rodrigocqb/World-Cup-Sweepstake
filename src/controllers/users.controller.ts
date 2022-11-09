import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import * as usersRepository from "../repositories/users.repository.js";

async function createUser(req: Request, res: Response) {
  const { name } = req.body as User;
  const user: User | undefined = res.locals.user;
  if (user) {
    return res.sendStatus(409);
  }
  try {
    await usersRepository.insertUser(name);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export { createUser };
