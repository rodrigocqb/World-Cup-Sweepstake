import { Request, Response, NextFunction } from "express";
import joi from "joi";

function validateSchema(schema: joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((v) => v.message);
      return res.status(422).send(errors);
    }
    return next();
  };
}

export default validateSchema;
