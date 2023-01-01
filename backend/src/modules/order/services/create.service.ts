import { AppDataSource } from "@data/config/data-source";

import AppError from "@data/common/errors/AppError";

import { User } from "@data/modules/user/entities/user.entity";
import { Order } from "@data/modules/order/entities/order.entity";
import { Purchase } from "@data/modules/purchase/entities/purchase.entity";

import * as services from "@modules/purchase/services";

export const create = async (
  uid: number,
  data: Partial<Purchase>[]
): Promise<Order> => {
  const userRepo = AppDataSource.getRepository(User);
  const orderRepo = AppDataSource.getRepository(Order);

  const user = await userRepo.findOneBy({ id: uid });
  if (!user) throw new AppError("User not found!", 404);

  const purchases = await services.create(uid, data);

  const order = orderRepo.create({
    user,
    purchases,
  });

  return await orderRepo.save(order);
};
