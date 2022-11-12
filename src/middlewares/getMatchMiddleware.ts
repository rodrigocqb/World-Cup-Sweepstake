import { NextFunction, Request, Response } from "express";
import { MatchEntity } from "../protocols/Match";
import * as matchesRepository from "../repositories/matches.repository.js";

async function getMatchData(req: Request, res: Response, next: NextFunction) {
  const { matchId } = req.params;
  if (isNaN(Number(matchId))) {
    return res.sendStatus(422);
  }
  try {
    const match: MatchEntity = (
      await matchesRepository.getMatchById(Number(matchId))
    ).rows[0];
    if (!match) {
      return res.sendStatus(404);
    }
    if (match.status === false) {
      return res.sendStatus(400);
    }
    return next();
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export default getMatchData;
