import { Request, Response } from "express";

import { Purchase } from "@data/modules/purchase/entities/purchase.entity";
import * as services from "@modules/order/services";

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;
  const { data } = req.body as { data: Partial<Purchase>[] };

  const order = await services.create(uid, data);

  return res.status(200).json(order);
};

export const list = async (req: Request, res: Response): Promise<Response> => {
  const { uid } = req.user;

  const order = await services.list(uid);

  return res.status(200).json(order);
};
