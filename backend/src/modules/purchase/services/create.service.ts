import { AppDataSource } from "@data/config/data-source";

import AppError from "@data/common/errors/AppError";

import { User } from "@data/modules/user/entities/user.entity";
import { Purchase } from "@data/modules/purchase/entities/purchase.entity";

import * as selfRepos from "@modules/purchase/repositories";
import * as repositories from "@modules/product/repositories";

export const create = async (
  uid: number,
  data: Partial<Purchase>[]
): Promise<Purchase[]> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: uid });
  if (!user) throw new AppError("User not found!", 404);

  const products = await Promise.all(
    data.map(async (item) => await repositories.findAndUpdate(item))
  );

  if (!products.length) throw new AppError("Products not found!", 404);

  const purchages = await Promise.all(
    products.map(async (p) => await selfRepos.saveMany(user, p, data))
  );

  return purchages;
};
