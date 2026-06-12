import { z } from "zod";

export const addToWatchlistSchema = z.object({
  movieId: z.string().uuid(),
  status: z
    .enum(["PLANNED", "WATCHING", "COMPLETED", "DROPPED"], {
      error: () => ({
        message: "Status must be of: PLANNED, WATCHING, COMPLETED, DROPPED",
      }),
    })
    .optional(),
  rating: z.coerce
    .number()
    .int("Rating must be an integer")
    .min(1)
    .max(10)
    .optional(),
  notes: z.string().optional(),
});

const updateWatchlistItemSchema = z.object({
  status: z.enum(["PLANNED", "WATCHING", "COMPLETED", "DROPPED"]).optional(),
  rating: z.number().min(0).max(10).optional(),
  notes: z.string().optional(),
});
