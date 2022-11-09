import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import * as usersRepository from "../repositories/users.repository.js";

async function createUser(req: Request, res: Response) {
  const { name } = req.body as User;
  try {
    const user: User | undefined = (await usersRepository.getUser(name))
      .rows[0];
    if (user) {
      return res.sendStatus(409);
    }
    await usersRepository.insertUser(name);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export { createUser };
