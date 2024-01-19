import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { issueServices } from "./issue.service";
import sendRes from "../../utils/sendResponse";

const createIssue = CatchAsyncError(async (req: Request, res: Response) => {
  const issue = req.body;
  issue.author = req.user._id;

  const result = await issueServices.createIssueIntoDB(issue);
  sendRes(res, {
    success: true,
    statusCode: 201,
    message: "Issue created successfully!",
    data: result,
  });
});

const getAllIssues = CatchAsyncError(async (req: Request, res: Response) => {
  const result = await issueServices.getAllIssueFromDB();
  sendRes(res, {
    success: true,
    statusCode: 200,
    message: "Issues retrieved successfully",
    data: result,
  });
});

export const issueController = {
  createIssue,
  getAllIssues,
};
