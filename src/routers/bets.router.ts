import { Router } from "express";
import { createBet, getUserBets } from "../controllers/bets.controller.js";
import checkUserName from "../middlewares/getUserMiddleware.js";

const router = Router();

router.post("/bets/:matchId", checkUserName, createBet);
router.get("/bets/user", checkUserName, getUserBets);

export default router;
