import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Product } from "@data/modules/product/entities/product.entity";

export const list = async (id: number): Promise<Product[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const productRepo = AppDataSource.getRepository(Product);

  const user = await userRepo.findOneBy({ id });

  if (!user) throw new AppError("User not found!", 404);

  return await productRepo
    .createQueryBuilder()
    .select("products")
    .from(Product, "products")
    .where("products.userId = :id", { id: user.id })
    .getMany();
};
