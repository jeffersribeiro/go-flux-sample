import { Router } from "express";

import { token } from "@data/middlewares/token.middleware";
import { authenticate } from "@data/middlewares/auth.middleware";
import { validateSchema } from "@data/middlewares/validate.middleware";

import * as controllers from "@modules/user/controllers";

import { createSchema, updateSchema } from "../validators/user.validator";

const userRouter = Router();

userRouter.post("/", validateSchema(createSchema), controllers.create);

userRouter.patch(
  "/",
  authenticate,
  token,
  validateSchema(updateSchema),
  controllers.update
);

export default userRouter;
