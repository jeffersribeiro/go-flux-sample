import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";
import { User } from "@data/modules/user/entities/user.entity";
import { Post } from "../entities/post.entity";

export const list = async (id: number): Promise<Post[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const postRepo = AppDataSource.getRepository(Post);

  const user = await userRepo.findOneBy({ id });

  if (!user) throw new AppError("User not found!", 404);

  return await postRepo
    .createQueryBuilder()
    .select("posts")
    .from(Post, "posts")
    .where("posts.userId = :id", { id: user.id })
    .getMany();
};
