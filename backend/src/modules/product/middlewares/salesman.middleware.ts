import { NextFunction } from "express";

import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";

import { Type, User } from "../../user/entities/user.entity";

export const salesman = async (req, _res, next): Promise<NextFunction> => {
  const { uid } = req.user;

  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: uid });

  if (!user) throw new AppError("User not found!", 404);

  if (user.type !== Type.Salesman)
    throw new AppError("Only the seller can create a product!", 401);

  return next();
};
