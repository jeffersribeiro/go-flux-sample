import { Request, Response } from "express";
import { Post } from "../entities/post.entity";

import * as services from "../services";

export const create = async (
  req: Request<{}, {}, Post>,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const data = req.body;
  const post = await services.create(Number(id), data);

  return res.status(200).json(post);
};

export const list = async (
  req: Request<{}, {}, Post>,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const posts = await services.list(Number(id));

  return res.status(200).json(posts);
};
