import { Request, Response, NextFunction } from "express";
import { UserEntity } from "../protocols/User.js";
import * as usersRepository from "../repositories/users.repository.js";

async function checkUserName(req: Request, res: Response, next: NextFunction) {
  let name: string;
  if (req.path === "/users") {
    name = req.body.name as string;
  } else {
    name = req.headers.name as string;
  }
  try {
    const user: UserEntity = (await usersRepository.getUser(name)).rows[0];
    if (req.path === "/users") {
      if (user) {
        return res.sendStatus(409);
      }
    } else {
      if (!user) {
        return res.sendStatus(401);
      }
    }
    res.locals.user = user;
    return next();
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export default checkUserName;
