import { Router } from "express";

import { token } from "@data/middlewares/token.middleware";
import { authenticate } from "@data/middlewares/auth.middleware";

import * as controllers from "../controllers";
import { validateSchema } from "@data/middlewares/validate.middleware";
import { loginSchema } from "../validators/login.validator";

const sessionRouter = Router();

sessionRouter.post("/", validateSchema(loginSchema), controllers.login);

sessionRouter.get("/", authenticate, token, controllers.logout);

export default sessionRouter;
