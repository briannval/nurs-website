import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/* 
To update the schema, either:
1. MIGRATE
npx drizzle-kit generate:pg -> npx tsx scripts/migrate.ts
YES migration files

2. PUSH
npx drizzle-kit push:pg
NO migration files
*/

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});
