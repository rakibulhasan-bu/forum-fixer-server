import { Schema } from "mongoose";

export interface TIssue {
  author: Schema.Types.ObjectId;
  title: string;
  shortDescription: string;
  description: string;
  likes: number;
  unlike: number;
  views: number;
  repliesNumber: number;
}
