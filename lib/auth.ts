import { any, betterAuth } from "better-auth";
import {db} from "@/db/index"
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database:db,
   adapter: drizzleAdapter(db, { schema}),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  
});
