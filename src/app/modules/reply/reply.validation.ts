import { z } from "zod";

const replyValidationSchema = z.object({
  body: z.object({
    issueId: z.string(),
    replyText: z.string().trim().min(5),
  }),
});

export const replyValidation = { replyValidationSchema };
