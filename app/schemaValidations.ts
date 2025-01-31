import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(65000),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(65000).optional(),
  assignedToUserId: z
    .string()
    .min(1, "Assigned to user id is required")
    .max(255)
    .optional()
    .nullable(),
});
