import express from "express";
import { replyController } from "./reply.controller";
import validateRequest from "../../middleware/validateRequest";
import { replyValidation } from "./reply.validation";
import auth from "../../middleware/auth";
import USER_ROLE from "../user/user.const";
const reviewRouter = express.Router();

reviewRouter.post(
  "/reply",
  auth(USER_ROLE.user),
  validateRequest(replyValidation.replyValidationSchema),
  replyController.createReply,
);

export default reviewRouter;
