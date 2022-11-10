import joi from "joi";
import { Match } from "../protocols/Match";

const matchSchema: joi.ObjectSchema<Match> = joi.object({
  team1: joi.string().required(),
  team2: joi.string().required(),
});

export default matchSchema;
