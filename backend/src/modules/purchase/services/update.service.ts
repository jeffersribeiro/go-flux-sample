import { AppDataSource } from "@data/config/data-source";

import { User } from "../entities/purchase.entity";

export const update = async (
  id: number,
  { firstName, lastName, username }: User
): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id });
  if (!user) throw new Error("User not Found!");

  user.firstName = firstName;
  user.lastName = lastName;
  user.username = username;

  await userRepo.update(id, user);
  return user;
};
