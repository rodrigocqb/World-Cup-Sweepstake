import { Router } from "express";
import { createBet } from "../controllers/bets.controller.js";
import checkUserName from "../middlewares/getUserMiddleware.js";

const router = Router();

router.post("/bet/:matchId", checkUserName, createBet);

export default router;
