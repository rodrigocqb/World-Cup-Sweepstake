import { Router } from "express";
import { createBet } from "../controllers/bets.controller.js";

const router = Router();

router.post("/bet/:matchId", createBet);

export default router;
