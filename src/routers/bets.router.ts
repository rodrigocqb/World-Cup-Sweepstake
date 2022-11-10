import { Router } from "express";
import {
  createBet,
  getUserBets,
  updateBet,
} from "../controllers/bets.controller.js";
import checkBetData from "../middlewares/checkBetDataMiddleware.js";
import checkUserName from "../middlewares/getUserMiddleware.js";
import validateSchema from "../middlewares/schemaValidationMiddleware.js";
import betSchema from "../schemas/bet.schema.js";

const router = Router();

router.post(
  "/bets/:matchId",
  validateSchema(betSchema),
  checkUserName,
  createBet
);
router.get("/bets/user", checkUserName, getUserBets);
router.put(
  "/bets/betId",
  validateSchema(betSchema),
  checkUserName,
  checkBetData,
  updateBet
);

export default router;
