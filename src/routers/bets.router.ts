import { Router } from "express";
import { createBet, getUserBets } from "../controllers/bets.controller.js";
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

export default router;
