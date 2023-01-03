import { AppDataSource } from "@data/config/data-source";

import { User } from "../entities/user.entity";

export const get = async (id: number): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id });
  if (!user) throw new Error("User not Found!");

  return user;
};
