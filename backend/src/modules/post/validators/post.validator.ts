import { z } from "zod";

export const createSchema = z.object({
  title: z.string(),
  text: z.string(),
  isPublished: z.boolean(),
});

export const updateSchema = z.object({
  title: z.string(),
  text: z.string(),
  isPublished: z.boolean(),
});
