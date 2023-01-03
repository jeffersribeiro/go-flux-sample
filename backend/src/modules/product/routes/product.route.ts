import { Router } from "express";

import multer from "@data/config/multer";

import { token } from "@data/middlewares/token.middleware";
import { authenticate } from "@data/middlewares/auth.middleware";
import { uploadFile } from "@data/middlewares/upload-file.middleware";
import { validateSchema } from "@data/middlewares/validate.middleware";

import * as controllers from "../controllers";

import { salesman } from "../middlewares/salesman.middleware";

import { updateSchema, createSchema } from "../validators/post.validator";

const productRouter = Router();

productRouter.get("/", authenticate, token, salesman, controllers.list);

productRouter.get("/by-seller/:id?", controllers.bySeller);

productRouter.get("/all", controllers.listAll);

productRouter.post(
  "/",
  multer.any(),
  uploadFile,
  validateSchema(createSchema),
  authenticate,
  token,
  salesman,
  controllers.create
);

productRouter.patch(
  "/:id",
  multer.any(),
  uploadFile,
  validateSchema(updateSchema),
  authenticate,
  token,
  salesman,
  controllers.update
);

productRouter.delete("/:id", authenticate, token, salesman, controllers.remove);

export default productRouter;
