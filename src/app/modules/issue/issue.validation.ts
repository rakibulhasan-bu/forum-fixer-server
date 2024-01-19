import { z } from "zod";

const issueValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(6),
    shortDescription: z.string().trim().min(10),
    description: z.string().trim().min(20),
  }),
});

export const issueValidation = {
  issueValidationSchema,
};
