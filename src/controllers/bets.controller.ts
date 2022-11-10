import { Request, Response } from "express";
import { Bet, BetEntity } from "../protocols/Bet.js";
import * as matchesRepository from "../repositories/matches.repository.js";
import * as betsRepository from "../repositories/bets.repository.js";
import { UserEntity } from "../protocols/User.js";
import { MatchEntity } from "../protocols/Match.js";

async function createBet(req: Request, res: Response) {
  const { matchId } = req.params;
  const { team1_score, team2_score } = req.body as Bet;
  const user = res.locals.user as UserEntity;
  try {
    const match: MatchEntity = (
      await matchesRepository.getMatchById(Number(matchId))
    ).rows[0];
    if (!match) {
      return res.sendStatus(404);
    }
    if (match.status === false) {
      return res.sendStatus(401);
    }
    await betsRepository.insertBet(
      user.id,
      Number(matchId),
      team1_score,
      team2_score
    );
    return res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

async function getUserBets(req: Request, res: Response) {
  const user = res.locals.user as UserEntity;
  try {
    const bets: BetEntity[] = (await betsRepository.getUserBetsById(user.id))
      .rows;
    return res.status(200).send(bets);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

async function updateBet() {}

async function deleteBet() {}

async function getRanking() {}

export { createBet, getUserBets };
