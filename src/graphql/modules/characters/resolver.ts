// Services
import { characterServices } from "@/services/characterServices";

export const charactersResolver = {
  characters: async ({ name, gender, status, species }: any) => {
    return await characterServices.getAllCharacters({
      name,
      status,
      species,
      gender,
    });
  },
};
