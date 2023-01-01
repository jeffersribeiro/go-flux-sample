import { z } from "zod";
import { Type } from "../entities/user.entity";

export const createSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  type: z.nativeEnum(Type),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const updateSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  type: z.nativeEnum(Type),
  username: z.string(),
});
