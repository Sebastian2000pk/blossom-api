// Services
import { characterServices } from "@/services/characterServices";

export const charactersResolver = {
  characters: async (_: any, { name, gender, status, specie }: any) => {
    return await characterServices.getAllCharacters(
      name,
      status,
      specie,
      gender
    );
  },
};
