import validateSchema from "@data/middlewares/validate.middleware";
import * as controllers from "@modules/user/controllers";
import { Router } from "express";
import { createSchema, updateSchema } from "../validators/user.validator";

const userRouter = Router();

userRouter.post("/", validateSchema(createSchema), controllers.create);

userRouter.patch("/", validateSchema(updateSchema), controllers.update);

export default userRouter;
