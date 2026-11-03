import { z } from "zod";

export const getAuthSchema = (signup: boolean) =>
  z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    // optional firstname lastname for Login only
    firstName: signup
      ? z.string().min(1, "First name is required")
      : z.string().optional(),
    lastName: signup
      ? z.string().min(1, "Last name is required")
      : z.string().optional(),
  });

export type AuthFormData = z.infer<ReturnType<typeof getAuthSchema>>;
