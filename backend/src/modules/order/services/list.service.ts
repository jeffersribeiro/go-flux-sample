import { AppDataSource } from "@data/config/data-source";
import { User } from "@data/modules/user/entities/user.entity";

import { Order } from "../entities/order.entity";

export const list = async (id: number): Promise<Order[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const orderRepo = AppDataSource.getRepository(Order);

  const user = await userRepo.findOneBy({ id });
  if (!user) throw new Error("User not Found!");

  const orders = await orderRepo.find({
    where: { user: { id } },
    relations: ["purchases", "purchases.product"],
  });

  return orders;
};
