import { Request, Response } from "express";
import { Bet } from "../protocols/Bet.js";
import * as usersRepository from "../repositories/users.repository.js";
import * as matchesRepository from "../repositories/matches.repository.js";
import * as betsRepository from "../repositories/bets.repository.js";

async function createBet(req: Request, res: Response) {
  const name = req.headers.name as string;
  const { matchId } = req.params;
  const { team1_score, team2_score } = req.body as Bet;
  try {
    const user = (await usersRepository.getUser(name)).rows[0];
    if (!user) {
      return res.sendStatus(401);
    }
    const match = (await matchesRepository.getMatchById(Number(matchId)))
      .rows[0];
    if (!match) {
      return res.sendStatus(404);
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

export { createBet };
