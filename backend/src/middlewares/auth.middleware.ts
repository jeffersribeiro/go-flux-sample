import AppError from "@data/common/errors/AppError";
import auth from "@data/config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const authenticate = async (
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
      id: sub.toString(),
    };

    return next();
  } catch (error) {
    throw new AppError("Token de autenticação inválido!", 401);
  }
};

export default authenticate;
