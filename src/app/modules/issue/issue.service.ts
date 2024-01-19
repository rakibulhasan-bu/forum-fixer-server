import AppError from "../../error/AppError";
import { TIssue } from "./issue.interface";
import Issue from "./issue.model";

const createIssueIntoDB = async (issue: TIssue) => {
  return await Issue.create(issue);
};

const getSingleIssueFromDB = async (issueId: string) => {
  return await Issue.findById(issueId);
};

const likeIssueIntoDB = async (issueId: string) => {
  const issue = await Issue.findById(issueId);

  if (!issue) {
    return new AppError(404, "This issue not found!");
  }

  // Increment the likes
  issue.likes += 1;
  // Save the updated issue
  await issue.save();

  return issue;
};

const unlikeIssueIntoDB = async (issueId: string) => {
  const issue = await Issue.findById(issueId);

  if (!issue) {
    return new AppError(404, "This issue not found!");
  }
  // Increment the likes
  issue.unlike -= 1;
  // Save the updated issue
  await issue.save();

  return issue;
};

const getAllIssueFromDB = async () => {
  const result = await Issue.find().populate({
    path: "author",
    select: "_id name email role",
  });
  return {
    issues: result,
  };
};

export const issueServices = {
  createIssueIntoDB,
  getSingleIssueFromDB,
  likeIssueIntoDB,
  unlikeIssueIntoDB,
  getAllIssueFromDB,
};
