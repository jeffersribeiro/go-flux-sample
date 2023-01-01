import * as controllers from "../controllers";
import { Router } from "express";

const postRouter = Router();

postRouter.post("/", controllers.create);
postRouter.get("/", controllers.list);

export default postRouter;
