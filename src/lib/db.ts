import "@/lib/config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { reviews } from "./schema";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export const getReviews = async () => {
  const selectResult = await db.select().from(reviews);
  console.log("results", selectResult);
  return selectResult;
};

export type NewReview = typeof reviews.$inferInsert;

export const insertReview = async (review: NewReview) => {
  return db.insert(reviews).values(review).returning();
};
