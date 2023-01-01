import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateSchema =
  (schema: AnyZodObject) =>
  async (req: Request, _: Response, next: NextFunction): Promise<any> => {
    schema.parse(req.body);
    return next();
  };

export default validateSchema;
