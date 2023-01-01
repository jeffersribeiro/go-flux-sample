import z from "zod";

export const postSchema = z.object({
  title: z.string(),
  message: z.string(),
  isPublished: z.boolean(),
});
