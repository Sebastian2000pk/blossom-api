import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  PORT: process.env.PORT || 3000,
  GRAPHQL_API_URL: "https://rickandmortyapi.com/graphql",
  RICK_AND_MORTY_API: "https://rickandmortyapi.com/api",
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
  FIREBASE_PRIVATE_KEY:
    process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "",
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL || "",
};

export const redisConfig = {
  REDIS_HOST: process.env.REDIS_HOST || "",
  REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379"),
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || "",
  REDIS_AVAILABLE: process.env.REDIS_AVAILABLE === "true",
};

export const databaseConfig = {
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  server: process.env.DB_SERVER || "",
  database: process.env.DB_NAME || "",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};
