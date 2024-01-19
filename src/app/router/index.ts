import { Router } from "express";
import issueRoute from "../modules/issue/issue.route";
import userRoute from "../modules/user/user.route";
import authRoute from "../modules/auth/auth.route";
import replyRouter from "../modules/reply/reply.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: issueRoute,
  },
  {
    path: "/auth",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/",
    route: replyRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
