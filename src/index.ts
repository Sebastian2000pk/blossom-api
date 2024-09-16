import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

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

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Habilitar GraphiQL para probar las consultas
  })
);

app.listen(3000, () => {
  console.log("Server is running on z");
});
