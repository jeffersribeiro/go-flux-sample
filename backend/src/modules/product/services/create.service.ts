import AppError from "@data/common/errors/AppError";

import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Product } from "@data/modules/product/entities/product.entity";

export const create = async (
  id: number,
  { description, image, isPublished, price, quantity, name, type }: Product
): Promise<Product> => {
  const userRepo = AppDataSource.getRepository(User);
  const productRepo = AppDataSource.getRepository(Product);

  const user = await userRepo.findOneBy({ id });

  if (!user) throw new AppError("User not found!", 404);

  const product = productRepo.create({
    user,
    type,
    name,
    image,
    price,
    quantity,
    description,
    isPublished,
  });

  return await productRepo.save(product);
};
