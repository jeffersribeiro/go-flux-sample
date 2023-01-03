import { User } from "@data/modules/user/entities/user.entity";
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

export const get = async (req: Request, res: Response): Promise<Response> => {
  const { uid } = req.user;
  const { id } = req.params;
  const products = await services.get(uid, Number(id));

  return res.status(200).json(products);
};

export const bySeller = async (
  req: Request<{}, {}, {}, Product>,
  res: Response
): Promise<Response> => {
  const { id } = req.query;
  console.log(id);
  const products = await services.bySeller(id);

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
  req: Request,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const { id } = req.params as unknown as { id: number };

  await services.remove(uid, id);

  return res.status(200).send();
};
