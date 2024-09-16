import express from "express";

const app = express();

app.get("/characters", async (req, res) => {
  try {
    const result = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            characters {
              results {
                id
                name
                status
                species
                type
              }
            }
          }
        `,
      }),
    });
    const data = await result.json();
    const response = data.data.characters.results;
    res.send(response);
    res.send("Hello World!");
  } catch (error) {}
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
