import { Router } from "express";

import userRouter from "@data/modules/user/routes/user.route";
import postRouter from "@data/modules/post/routes/post.route";
import sessionRouter from "@data/modules/session/routes/session.route";

import authenticate from "@data/middlewares/auth.middleware";
import { token } from "@data/middlewares/token.middleware";

const router = Router();

router.use("/session", sessionRouter);
router.use("/user", authenticate, token, userRouter);
router.use("/post", authenticate, token, postRouter);

export default router;
