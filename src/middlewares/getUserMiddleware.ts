import { Request, Response, NextFunction } from "express";
import { User } from "../protocols/User.js";
import * as usersRepository from "../repositories/users.repository.js";

async function checkUserName(req: Request, res: Response, next: NextFunction) {
  const name = req.headers.name as string;
  try {
    const user: User | undefined = (await usersRepository.getUser(name))
      .rows[0];
    res.locals.user = user;
    return next();
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export default checkUserName;
