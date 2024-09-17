export const config = {
  PORT: process.env.PORT || 3000,
  GRAPHQL_API_URL: "https://rickandmortyapi.com/graphql",
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
