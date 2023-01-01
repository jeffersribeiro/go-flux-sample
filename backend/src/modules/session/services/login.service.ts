import { addDays } from "date-fns";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import auth from "@data/config/auth";
import { AppDataSource, getRepository } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Session } from "@data/modules/session/entities/session.entity";

export interface LoginDTO extends Pick<User, "email" | "password"> {
  ip: string;
}

export const login = async ({
  email,
  password,
  ip,
}: LoginDTO): Promise<Session> => {
  const userRepo = AppDataSource.getRepository(User);
  const sessionRepo = AppDataSource.getRepository(Session);

  const user = await userRepo.findOneBy({ email });

  if (!user) throw new Error("User not found!");

  const session = await sessionRepo
    .createQueryBuilder()
    .select("sessions.id")
    .from(Session, "sessions")
    .where("sessions.userId = :id", { id: user.id })
    .andWhere("sessions.active = :active", { active: true })
    .getOne();

  if (session) await sessionRepo.update(session.id, { active: false });

  const hashPassword = await compare(password, user.password);

  if (!hashPassword) throw new Error("Email or Password incorrect!");

  const { expiresIn, secret } = auth.jwt;
  const token = sign({}, secret, {
    subject: user.id.toString(),
    expiresIn,
  });

  const expiresAt = addDays(new Date(), 2);

  const activeSession = sessionRepo.create({
    user,
    token,
    ip,
    expiresAt,
  });

  return await sessionRepo.save(activeSession);
};
