import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { config } from "./config";
import { resolver } from "./graphql/resolvers";
import { schema } from "./graphql/schemas";

// Middlewares
import { logMiddleware } from "@/middlewares/logMiddleware";
import {
  cacheMiddleware,
  cacheStoreMiddleware,
} from "./middlewares/cacheMiddleware";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logMiddleware);

app.use(cacheStoreMiddleware);
app.use(
  "/graphql",
  cacheMiddleware,
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true, // Habilitar GraphiQL para probar las consultas
  })
);

app.listen(config.PORT, () => {
  console.log("Server is running on z");
});
