import { TIssue } from "./issue.interface";
import Issue from "./issue.model";

const createIssueIntoDB = async (issue: TIssue) => {
  return await Issue.create(issue);
};

const getAllIssueFromDB = async () => {
  const result = await Issue.find().populate({
    path: "author",
    select: "_id username email role",
  });
  return {
    issues: result,
  };
};

export const issueServices = {
  createIssueIntoDB,
  getAllIssueFromDB,
};
