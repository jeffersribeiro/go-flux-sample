import { Router } from "express";

import { validateSchema } from "@data/middlewares/validate.middleware";

import * as controllers from "@modules/user/controllers";

import { createSchema } from "../validators/purchase.validator";

const purchaseRouter = Router();

purchaseRouter.post("/", validateSchema(createSchema), controllers.create);

export default purchaseRouter;
