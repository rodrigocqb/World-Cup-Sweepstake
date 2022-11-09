import { Router } from "express";
import { createMatch } from "../controllers/matches.controller.js";

const router = Router();

router.post("/matches", createMatch);

export default router;
