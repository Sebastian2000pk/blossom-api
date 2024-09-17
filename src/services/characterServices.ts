import { config } from "@/config";

export const characterServices = {
  getAllCharacters: async (
    name: string,
    status: boolean,
    species: string,
    gender: string
  ) => {
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

    const response = await fetch(config.GRAPHQL_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return data.data.characters.results;
  },
};
