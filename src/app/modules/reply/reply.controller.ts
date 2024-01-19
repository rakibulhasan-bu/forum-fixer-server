import { Request, Response } from "express";
import { replyServices } from "./reply.services";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { issueServices } from "../issue/issue.service";
import AppError from "../../error/AppError";
import sendRes from "../../utils/sendResponse";

const createReply = CatchAsyncError(async (req: Request, res: Response) => {
  const reply = req.body;
  reply.userId = req.user._id;

  const isIssueExist = await issueServices.getSingleIssueFromDB(reply?.issueId);
  if (!isIssueExist) {
    throw new AppError(404, "Issue id not valid!");
  }

  const result = await replyServices.createReplyIntoDB(reply);

  sendRes(res, {
    success: true,
    statusCode: 201,
    message: "Reply created successfully",
    data: result,
  });
});

export const replyController = {
  createReply,
};
