import express from "express";
import { issueController } from "./issue.controller";
import validateRequest from "../../middleware/validateRequest";
import { issueValidation } from "./issue.validation";

const issueRoute = express.Router();

issueRoute.post(
  "/issue",
  validateRequest(issueValidation.issueValidationSchema),
  issueController.createIssue,
);

issueRoute.patch("/issue/:issueId/like", issueController.likeIssue);

issueRoute.patch("/issue/:issueId/unlike", issueController.unlikeIssue);

issueRoute.get("/issues", issueController.getAllIssues);

export default issueRoute;
