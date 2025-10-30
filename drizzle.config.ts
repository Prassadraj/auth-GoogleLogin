import { defineConfig } from "drizzle-kit";

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("❌ Missing DB_URL in environment variables");
}

export default defineConfig({
  schema: "./db/schema/*.ts",
  out: "./drizzle",
  dialect: "postgresql",
  
  dbCredentials: {
    url: dbUrl,
  },
});
