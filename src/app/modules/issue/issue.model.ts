import { Schema, model } from "mongoose";
import { TIssue } from "./issue.interface";

const IssueSchema = new Schema<TIssue>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    unlike: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    repliesNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Issue = model("Issue", IssueSchema);

export default Issue;
