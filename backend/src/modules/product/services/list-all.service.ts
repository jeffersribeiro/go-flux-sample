import { AppDataSource } from "@data/config/data-source";

import { Product } from "@data/modules/product/entities/product.entity";

export const listAll = async (): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product);

  return await productRepo.find({ where: { isPublished: true } });
};
