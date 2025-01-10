import { z } from 'zod';

export const ItemCreateInput = z.object({
  name: z.string().max(100),
  description: z.string().max(500).optional(),
  price: z.number().positive(),
});

export const ItemUpdateInput = ItemCreateInput.partial();
