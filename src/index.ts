import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { config } from "./config";
import { resolver } from "./graphql/resolver";

// Middlewares
import { logMiddleware } from "@/middlewares/logMiddleware";

const app = express();

// Definir el esquema de GraphQL
const schema = buildSchema(`
  type Query {
    characters(name: String, status: String, species: String, gender: String): [Character]
  }

  type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Location
    location: Location
    image: String
    episode: [String]
  }

  type Location {
    name: String
    url: String
  }
`);

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
