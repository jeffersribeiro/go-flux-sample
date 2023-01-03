import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";
import { Type, User } from "@data/modules/user/entities/user.entity";
import { Product } from "../entities/product.entity";

export const bySeller = async (id?: number): Promise<User[] | Product[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const productRepo = AppDataSource.getRepository(Product);

  if (id) {
    const user = await userRepo.findOneBy({ id });
    if (!user) throw new AppError("Seller not found!", 404);

    return await productRepo.find({
      relations: ["user"],
      where: {
        user: {
          type: Type.Salesman,
          id,
        },
      },
    });
  }

  return await userRepo.find({
    where: {
      type: Type.Salesman,
    },
    relations: ["products"],
  });
};
