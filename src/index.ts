import express from "express";
import { graphqlHTTP } from "express-graphql";
import { config } from "./config";
import { resolver } from "./graphql/resolvers";
import { schema } from "./graphql/schemas";

// Middlewares
import { logMiddleware } from "@/middlewares/logMiddleware";

const app = express();

// Middlewares
app.use(express.json());
app.use(logMiddleware);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    rootValue: resolver,
    graphiql: true, // Habilitar GraphiQL para probar las consultas
  })
);

app.listen(config.PORT, () => {
  console.log("Server is running on z");
});
