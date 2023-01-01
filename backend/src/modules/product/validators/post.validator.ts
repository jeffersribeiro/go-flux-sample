import { z } from "zod";
import { Type } from "../entities/product.entity";

export const createSchema = z.object({
  name: z.string(),
  price: z.preprocess(
    (a) => Number(z.string().parse(a)),
    z.number().positive()
  ),
  description: z.string(),
  image: z.string(),
  quantity: z.preprocess(
    (a) => Number(z.string().parse(a)),
    z.number().positive().default(0)
  ),
  type: z.nativeEnum(Type).default(Type.Food),
  isPublished: z.preprocess(
    (a) => Boolean(z.string().parse(a)),
    z.boolean().default(true)
  ),
});

export const updateSchema = z.object({
  name: z.string(),
  price: z.preprocess(
    (a) => Number(z.string().parse(a)),
    z.number().positive()
  ),
  description: z.string(),
  image: z.string(),
  quantity: z.preprocess(
    (a) => Number(z.string().parse(a)),
    z.number().positive().default(0)
  ),
  type: z.nativeEnum(Type).default(Type.Food),
  isPublished: z.preprocess(
    (a) => Boolean(z.string().parse(a)),
    z.boolean().default(true)
  ),
});
