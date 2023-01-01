import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import auth from "@data/config/auth";
import AppError from "@data/common/errors/AppError";

export const authenticate = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token de autenticação ausente!", 401);
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub } = verify(token, auth.jwt.secret);
    req.user = {
      uid: Number(sub.toString()),
    };

    return next();
  } catch (error) {
    throw new AppError("Token de autenticação inválido!", 401);
  }
};
