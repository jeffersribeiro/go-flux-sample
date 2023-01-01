import { z } from "zod";
import { Status } from "../entities/purchase.entity";

export const createSchema = z.object({
  status: z.nativeEnum(Status),
});

export const updateSchema = z.object({
  status: z.nativeEnum(Status),
});
