import { Types } from "mongoose";

export interface TReply {
  issueId: Types.ObjectId;
  userId: Types.ObjectId;
  replyText: string;
}
