import { NextFunction, Request, Response } from "express";
import { BetEntity } from "../protocols/Bet.js";
import { UserEntity } from "../protocols/User.js";
import * as betsRepository from "../repositories/bets.repository.js";

async function checkBetData(req: Request, res: Response, next: NextFunction) {
  const { betId } = req.params;
  const user = res.locals.user as UserEntity;
  try {
    const bet: BetEntity = (await betsRepository.getBet(Number(betId))).rows[0];
    if (!bet) {
      return res.sendStatus(404);
    }
    if (bet.user_id !== user.id) {
      return res.sendStatus(401);
    }
    if (bet.cancelled || bet.status === true || bet.status === false) {
      return res.sendStatus(400);
    }
    res.locals.bet = bet;
    return next();
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export default checkBetData;
