import { hash } from "bcryptjs";

import { AppDataSource } from "@data/config/data-source";

import { User } from "../entities/user.entity";
import AppError from "@data/common/errors/AppError";

export const create = async ({
  email,
  firstName,
  lastName,
  password,
  username,
}: User): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);

  const exists = await userRepo.findOneBy({ email });

  if (exists) throw new AppError("The email has already been used!", 409);

  const hashPassword = await hash(password, 8);

  const user = userRepo.create({
    email,
    firstName,
    lastName,
    password: hashPassword,
    username,
  });

  return await userRepo.save(user);
};
