import { isBefore } from "date-fns";
import { NextFunction, Request, Response } from "express";

import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";

import { Session } from "@data/modules/session/entities/session.entity";

export const token = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Missing authentication token!", 401);
  }

  const [, token] = authHeader.split(" ");

  const sessionRepo = AppDataSource.getRepository(Session);

  const session = await sessionRepo.findOneBy({ token });

  if (!session) {
    throw new AppError("Token not found!", 404);
  }

  if (!session.active || isBefore(session.expiresAt, new Date())) {
    throw new AppError("The token has expired", 401);
  }

  return next();
};
