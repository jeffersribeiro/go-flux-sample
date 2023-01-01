import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";
import { Product } from "../entities/product.entity";

export const findAndUpdate = async ({
  id,
  quantity,
}: Partial<Product>): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product);

  const product = await productRepo.findOneBy({ id });
  if (!product) throw new AppError("Product not found", 404);

  const remaining = product.quantity - quantity;
  if (remaining < 0) throw new AppError("No quantity available in stock", 404);

  product.quantity -= quantity;

  await productRepo.update(id, product);

  return product;
};
