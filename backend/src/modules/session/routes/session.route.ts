import { Router } from "express";

import { token } from "@data/middlewares/token.middleware";
import { authenticate } from "@data/middlewares/auth.middleware";

import * as controllers from "../controllers";

const sessionRouter = Router();

sessionRouter.post("/", controllers.login);

sessionRouter.get("/", authenticate, token, controllers.logout);

export default sessionRouter;
