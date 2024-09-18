import { Model } from "sequelize";
import { sequelize } from "@/database/config";
import { DataTypes } from "sequelize";
import type { Character } from "@/interfaces/character";

class CharacterModel extends Model<Character> {
  id: number;
  name: string;
  status: string;
  species: string;
}

CharacterModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Character",
    timestamps: false,
    tableName: "characters",
  }
);

export default CharacterModel;
