import { z } from "zod";

const registerUserValidation = z.object({
  body: z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    avatar: z.string().optional(),
    password: z.string().min(6),
    role: z.enum(["user", "admin"]).optional(),
  }),
});

export const userValidations = { registerUserValidation };
