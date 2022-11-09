import express from "express";
import cors from "cors";
import usersRouter from "./routers/users.router.js";
import betsRouter from "./routers/bets.router.js";
import matchesRouter from "./routers/matches.router.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(usersRouter);
app.use(betsRouter);
app.use(matchesRouter);

export default app;
