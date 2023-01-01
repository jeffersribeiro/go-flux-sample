import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Product } from "@data/modules/product/entities/product.entity";
import { Purchase } from "@data/modules/purchase/entities/purchase.entity";

export const saveMany = async (
  user: User,
  product: Product,
  data: Partial<Purchase>[]
): Promise<Purchase> => {
  const purchaseRepo = AppDataSource.getRepository(Purchase);

  const purchase = new Purchase();

  const { quantity } = data.find(({ id }) => id === product.id);

  purchase.user = user;
  purchase.product = product;
  purchase.quantity = quantity;

  await purchaseRepo.save(purchase);
  return purchase;
};
