import { getRepository } from "@data/config/data-source";

import { User } from "../entities/user.entity";

export const update = async ({
  id,
  firstName,
  lastName,
  username,
}: User): Promise<void> => {
  const userRepo = getRepository(User);

  const user = userRepo.findBy({ id });

  if (!user) throw new Error("User not Found!");

  await userRepo.update(id, {
    firstName,
    lastName,
    username,
  });
};
