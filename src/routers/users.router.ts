import { Router } from "express";
import { createUser } from "../controllers/users.controller.js";
import checkUserName from "../middlewares/getUserMiddleware.js";

const router = Router();

router.post("/users", checkUserName, createUser);

export default router;
