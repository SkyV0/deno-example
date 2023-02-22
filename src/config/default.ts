import { dotenvConfig } from "../deps.ts";
dotenvConfig({ export: true, path: ".env" });

const config: {
  port: number;
  dbUri: string;
  dbName: string;
  jwtSecret: string;
  jwtExpiresIn: number;
} = {
  port: parseInt(Deno.env.get("PORT") as unknown as string),
  dbUri: Deno.env.get("MONGODB_URI") as unknown as string,
  dbName: Deno.env.get("MONGO_DATABASE_NAME") as unknown as string,
  jwtSecret: Deno.env.get("JWT_SECRET") as unknown as string,
  jwtExpiresIn: 30,
};

export default config;
