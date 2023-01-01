import AppError from "@data/common/errors/AppError";
import { AppDataSource } from "@data/config/data-source";

import { User } from "@data/modules/user/entities/user.entity";
import { Post } from "@data/modules/post/entities/post.entity";

export const update = async (
  uid: number,
  { id, title, text, isPublished }: Partial<Post>
): Promise<Post> => {
  const userRepo = AppDataSource.getRepository(User);
  const postRepo = AppDataSource.getRepository(Post);

  const user = await userRepo.findOneBy({ id: uid });
  if (!user) throw new AppError("User not found!", 404);

  const post = await postRepo.findOneBy({ id });
  if (!post) throw new AppError("Post not found!", 404);

  post.title = title;
  post.text = text;
  post.isPublished = isPublished;

  await postRepo.update(id, post);
  return post;
};
