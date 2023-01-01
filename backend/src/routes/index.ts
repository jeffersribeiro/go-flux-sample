import { Router } from "express";

import userRouter from "@modules/user/routes/user.route";
import postRouter from "@modules/post/routes/post.route";
import sessionRouter from "@modules/session/routes/session.route";
import productRouter from "@modules/product/routes/product.route";
import orderRouter from "@data/modules/order/routes/order.route";
import purchaseRouter from "@data/modules/purchase/routes/purchase.route";

import { token } from "@data/middlewares/token.middleware";
import { authenticate } from "@data/middlewares/auth.middleware";
import { salesman } from "@data/modules/product/middlewares/salesman.middleware";

const router = Router();

router.use("/user", userRouter);
router.use("/session", sessionRouter);
router.use("/post", authenticate, token, postRouter);
router.use("/order", authenticate, token, orderRouter);
router.use("/purchase", authenticate, token, purchaseRouter);
router.use("/product", authenticate, token, salesman, productRouter);

export default router;
