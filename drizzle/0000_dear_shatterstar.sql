CREATE TABLE
  IF NOT EXISTS "reviews" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" text NOT NULL,
    "email" text NOT NULL,
    "message" text NOT NULL,
    "createdAt" timestamp DEFAULT now ()
  );
