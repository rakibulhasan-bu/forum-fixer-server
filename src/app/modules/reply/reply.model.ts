import { Schema, model } from "mongoose";

import { TReply } from "./reply.interface";

const replySchema = new Schema<TReply>(
  {
    issueId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Issue",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    replyText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Reply = model<TReply>("Reply", replySchema);

export default Reply;
