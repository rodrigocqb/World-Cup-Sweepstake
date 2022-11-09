import { Router } from "express";
import { createMatch, getMatches } from "../controllers/matches.controller.js";

const router = Router();

router.post("/matches", createMatch);
router.get("/matches", getMatches);

export default router;
