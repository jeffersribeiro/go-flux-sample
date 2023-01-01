import { Request, Response } from "express";
import { Post } from "../entities/post.entity";

import * as services from "../services";

export const create = async (
  req: Request<{}, {}, Post>,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const data = req.body;
  const post = await services.create(uid, data);

  return res.status(200).json(post);
};

export const list = async (
  req: Request<{}, {}, Post>,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const posts = await services.list(uid);

  return res.status(200).json(posts);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const { id } = req.params as Partial<Post>;
  const { title, text, isPublished } = req.body as Partial<Post>;

  const data = { id, title, text, isPublished };

  const posts = await services.update(uid, data);

  return res.status(200).json(posts);
};

export const remove = async (
  req: Request<Post, {}, Post>,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const data = req.params;

  const posts = await services.remove(uid, data);

  return res.status(200).json(posts);
};
