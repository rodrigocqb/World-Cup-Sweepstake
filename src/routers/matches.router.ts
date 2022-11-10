import { Router } from "express";
import {
  createMatch,
  getMatches,
  updateMatchResult,
} from "../controllers/matches.controller.js";
import getMatchData from "../middlewares/getMatchMiddleware.js";
import validateSchema from "../middlewares/schemaValidationMiddleware.js";
import matchSchema from "../schemas/match.schema.js";

const router = Router();

router.post("/matches", validateSchema(matchSchema), createMatch);
router.get("/matches", getMatches);
router.put("/matches/:matchId", getMatchData, updateMatchResult);

export default router;
