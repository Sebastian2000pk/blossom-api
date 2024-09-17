import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { config } from "./config";
import { resolver } from "./graphql/resolvers";

// Middlewares
import { logMiddleware } from "@/middlewares/logMiddleware";

const app = express();

// URL de la API de GraphQL de Rick and Morty
const GRAPHQL_API_URL = "https://rickandmortyapi.com/graphql";

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

async function searchCharacters(
  name: string,
  status: boolean,
  species: string,
  gender: string
) {
  const query = `
    query {
      characters(filter: { name: "${name || ""}", status: "${
    status || ""
  }", species: "${species || ""}", gender: "${gender || ""}" }) {
        results {
          id
          name
          status
          species
          gender
          origin {
            name
          }
          location {
            name
          }
          image
        }
      }
    }
  `;

  const response = await fetch(GRAPHQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.characters.results;
}

const root = {
  // Resolver para buscar personajes con filtros
  characters: async ({ name, status, species, gender }: any) => {
    return await searchCharacters(name, status, species, gender);
  },
};

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
