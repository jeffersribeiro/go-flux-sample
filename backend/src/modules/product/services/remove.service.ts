import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Product } from "@data/modules/product/entities/product.entity";

export const remove = async (uid: number, { id }: Product): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);
  const productRepo = AppDataSource.getRepository(Product);

  const user = await userRepo.findOneBy({ id: uid });
  if (!user) throw new AppError("User not found!", 404);

  const product = await productRepo.findOneBy({ id });
  if (!product) throw new AppError("Product not found!", 404);

  await productRepo.delete(product.id);
};
