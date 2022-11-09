import { Request, Response } from "express";
import { Match } from "../protocols/Match.js";
import * as matchesRepository from "../repositories/matches.repository.js";

async function createMatch(req: Request, res: Response) {
  const { team1, team2 } = req.body as Match;
  try {
    const match: Match | undefined = (
      await matchesRepository.getMatch(team1, team2)
    ).rows[0];
    if (match) {
      return res.sendStatus(409);
    }
    await matchesRepository.insertMatch(team1, team2);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export { createMatch };
