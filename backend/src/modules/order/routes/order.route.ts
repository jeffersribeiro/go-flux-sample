import { Router } from "express";

import { validateSchema } from "@data/middlewares/validate.middleware";

import * as controllers from "@modules/order/controllers";

import { createSchema } from "../validators/order.validator";

const orderRouter = Router();

orderRouter.get("/", controllers.list);

orderRouter.post("/", validateSchema(createSchema), controllers.create);

export default orderRouter;
