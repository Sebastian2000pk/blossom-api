import { WhereOptions, Op } from "sequelize";
import CharacterModel from "@/models/character";

interface GetCharactersParams {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}

export const characterServices = {
  getAllCharacters: async ({
    name,
    status,
    species,
    gender,
  }: GetCharactersParams): Promise<any[]> => {
    const where: WhereOptions<GetCharactersParams> = {};

    if (name) {
      where.name = { [Op.like]: `%${name}%` }; // Búsqueda parcial con `LIKE`
    }

    if (status) {
      where.status = status; // Filtrar por estado exacto
    }

    if (species) {
      where.species = species; // Filtrar por especie exacta
    }

    if (gender) {
      where.gender = gender; // Filtrar por género exacto
    }

    return await CharacterModel.findAll({ where });
  },

  getCharacterById: async (id: number): Promise<any> => {
    return await CharacterModel.findByPk(id);
  },
};
