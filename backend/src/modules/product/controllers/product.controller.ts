import { Request, Response } from "express";
import { Product } from "../entities/product.entity";

import * as services from "../services";

export const create = async (
  req: Request<{}, {}, Product>,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const data = req.body;

  const product = await services.create(uid, data);

  return res.status(200).json(product);
};

export const list = async (
  req: Request<{}, {}, Product>,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const products = await services.list(uid);

  return res.status(200).json(products);
};

export const listAll = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const products = await services.listAll();

  return res.status(200).json(products);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const { id } = req.params as Partial<Product>;
  const { description, image, name, price, quantity, type, isPublished } =
    req.body as Partial<Product>;

  const data = {
    id,
    description,
    image,
    name,
    price,
    quantity,
    type,
    isPublished,
  };

  const posts = await services.update(uid, data);

  return res.status(200).json(posts);
};

export const remove = async (
  req: Request<Product, {}, Product>,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const data = req.params;

  await services.remove(uid, data);

  return res.status(200).send();
};
