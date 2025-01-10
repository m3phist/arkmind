import { z } from "zod";

export const itemFormSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  description: z.string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  price: z.number()
    .positive("Price must be a positive number")
    .min(0.01, "Price must be greater than 0"),
});
