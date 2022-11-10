import { Router } from "express";
import { createUser } from "../controllers/users.controller.js";
import checkUserName from "../middlewares/getUserMiddleware.js";
import validateSchema from "../middlewares/schemaValidationMiddleware.js";
import userSchema from "../schemas/user.schema.js";

const router = Router();

router.post("/users", validateSchema(userSchema), checkUserName, createUser);

export default router;
