import { addDays } from "date-fns";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import auth from "@data/config/auth";
import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Session } from "@data/modules/session/entities/session.entity";
import AppError from "@data/common/errors/AppError";

export const logout = async (id: number): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);
  const sessionRepo = AppDataSource.getRepository(Session);

  const user = await userRepo.findOneBy({ id });

  if (!user) throw new Error("User not found!");

  const session = await sessionRepo
    .createQueryBuilder()
    .select("sessions.id")
    .from(Session, "sessions")
    .where("sessions.userId = :id", { id: user.id })
    .andWhere("sessions.active = :active", { active: true })
    .getOne();

  if (!session) {
    throw new AppError("There are currently no active sessions!", 404);
  }

  await sessionRepo.update(session.id, { active: false });
};
