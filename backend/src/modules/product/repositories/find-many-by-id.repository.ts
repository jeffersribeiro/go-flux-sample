import { AppDataSource } from "@data/config/data-source";

import { Product } from "../entities/product.entity";

export const findManyById = async (ids: number[]): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product);

  return await productRepo
    .createQueryBuilder()
    .select("products")
    .from(Product, "products")
    .whereInIds(ids)
    .getMany();
};
