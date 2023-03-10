import { User } from "@data/modules/user/entities/user.entity";
import { Request, Response } from "express";
import * as services from "../services";

export const login = async (
  req: Request<{}, {}, Pick<User, "email" | "password">>,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;
  let ip = req.headers["x-forwarded-for"];

  if (Array.isArray(ip)) ip = ip[0];

  const session = await services.login({
    email: email.toLowerCase(),
    ip,
    password,
  });

  return res.status(200).json(session);
};

export const logout = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { uid } = req.user;

  await services.logout(uid);

  return res.status(200).send();
};
