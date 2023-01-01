import { Router } from "express";

import multer from "@data/config/multer";
import { validateSchema } from "@data/middlewares/validate.middleware";
import { uploadFile } from "@data/middlewares/upload-file.middleware";

import * as controllers from "../controllers";
import { updateSchema, createSchema } from "../validators/post.validator";

const productRouter = Router();

productRouter.get("/", controllers.list);

productRouter.get("/all", controllers.listAll);

productRouter.post(
  "/",
  multer.any(),
  uploadFile,
  validateSchema(createSchema),
  controllers.create
);

productRouter.patch(
  "/:id",
  multer.any(),
  uploadFile,
  validateSchema(updateSchema),
  controllers.update
);

productRouter.delete("/:id", controllers.remove);

export default productRouter;
