import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Product } from "@data/modules/product/entities/product.entity";

export const update = async (
  uid: number,
  { id, image, name, price, quantity, type, isPublished }: Partial<Product>
): Promise<Product> => {
  const userRepo = AppDataSource.getRepository(User);
  const productRepo = AppDataSource.getRepository(Product);

  const user = await userRepo.findOneBy({ id: uid });
  if (!user) throw new AppError("User not found!", 404);

  const product = await productRepo.findOneBy({ id });
  if (!product) throw new AppError("Product not found!", 404);

  product.name = name;
  product.type = type;
  product.image = image;
  product.price = price;
  product.quantity = quantity;
  product.isPublished = isPublished;

  await productRepo.update(id, product);
  return product;
};
