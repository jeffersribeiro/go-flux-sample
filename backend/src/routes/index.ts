import { Router } from "express";

import userRouter from "@data/modules/user/routes/user.route";
import sessionRouter from "@data/modules/session/routes/session.route";

import authenticate from "@data/middlewares/auth.middleware";

const router = Router();

router.use("/user", authenticate, userRouter);
router.use("/session", sessionRouter);

export default router;
