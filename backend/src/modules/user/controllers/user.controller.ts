import { Request, Response } from "express";

import * as services from "@modules/user/services";
import { User } from "@modules/user/entities/user.entity";

export const create = async (
  req: Request<{}, {}, User>,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const user = await services.create(data);

  return res.status(200).json(user);
};

export const update = async (
  req: Request<{}, {}, User>,
  res: Response
): Promise<Response> => {
  const id = req.user.id;
  const data = req.body;

  await services.update({ id, ...data });

  return res.status(200).send();
};
