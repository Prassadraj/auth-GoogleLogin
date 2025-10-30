import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { google } from "better-auth/providers/google";

export const auth = betterAuth({
  adapter: drizzleAdapter(db, {
    provider: "pg", // ✅ required
    schema,        // ✅ correct place
  }),
  
  socialProviders: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});
