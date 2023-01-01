import { z } from "zod";

export const orderSchema = z.object({
  id: z.number().positive(),
  quantity: z.number().positive(),
});

export const createSchema = z.object({
  data: z.array(orderSchema),
});
