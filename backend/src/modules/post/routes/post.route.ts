import { Router } from "express";

import { validateSchema } from "@data/middlewares/validate.middleware";

import * as controllers from "../controllers";
import { updateSchema, createSchema } from "../validators/post.validator";

const postRouter = Router();

postRouter.get("/", controllers.list);
postRouter.post("/", validateSchema(createSchema), controllers.create);
postRouter.patch("/:id", validateSchema(updateSchema), controllers.update);
postRouter.delete("/:id", controllers.remove);

export default postRouter;
