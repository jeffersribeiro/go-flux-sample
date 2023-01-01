import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateSchema =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction): Promise<any> => {
    schema.parse(req.body);
    return next();
  };
