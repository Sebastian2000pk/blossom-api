import axios from "axios";
import { sequelize } from "./config";
import CharacterModel from "@/models/character";
import { config } from "@/config";
import { Character } from "../interfaces/character";

// Función para obtener personajes desde la API de Rick and Morty
async function fetchCharacters() {
  try {
    const response = await axios.get(
      `${config.RICK_AND_MORTY_API}/character?page=1`
    );
    const characters = response.data.results.slice(0, 15); // Obtener solo los primeros 15 personajes
    return characters;
  } catch (error) {
    console.error("Error fetching characters from Rick and Morty API:", error);
    return [];
  }
}

// Función para inicializar la base de datos con los personajes
async function initializeDatabase() {
  try {
    await sequelize.sync({ force: true }); // Elimina las tablas existentes y las vuelve a crear
    console.log("Database synchronized.");

    const characters = await fetchCharacters();

    const characterPromises = characters.map((character: Character) => {
      return CharacterModel.create({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        image: character.image,
      });
    });

    await Promise.all(characterPromises);

    console.log(
      "Database initialized with characters from Rick and Morty API."
    );
  } catch (error) {
    console.error("Error initializing database:", error);
  } finally {
    await sequelize.close(); // Cerrar la conexión a la base de datos
  }
}

// Ejecutar la función de inicialización
initializeDatabase();
