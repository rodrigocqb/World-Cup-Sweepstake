import { Router } from "express";
import { createMatch, getMatches } from "../controllers/matches.controller.js";
import validateSchema from "../middlewares/schemaValidationMiddleware.js";
import matchSchema from "../schemas/match.schema.js";

const router = Router();

router.post("/matches", validateSchema(matchSchema), createMatch);
router.get("/matches", getMatches);

export default router;
