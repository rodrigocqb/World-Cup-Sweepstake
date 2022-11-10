import joi from "joi";
import { Bet } from "../protocols/Bet.js";

const betSchema: joi.ObjectSchema<Bet> = joi.object({
  team1_score: joi.number().required(),
  team2_score: joi.number().required(),
});

export default betSchema;
