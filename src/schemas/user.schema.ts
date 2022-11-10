import joi from "joi";
import { User } from "../protocols/User";

const userSchema: joi.ObjectSchema<User> = joi.object({
  name: joi.string().required(),
});

export default userSchema;
