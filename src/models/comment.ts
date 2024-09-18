import { Model } from "sequelize";
import { sequelize } from "@/database/config";
import { DataTypes } from "sequelize";
import type { Comment } from "@/interfaces/comment";

class CommentModel extends Model<Comment> implements Comment {
  id: number;
  content: string;
  characterId: number;
  createdAt: Date;
  updatedAt: Date;
}

CommentModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Comment",
    timestamps: true,
    tableName: "comments",
  }
);

export default CommentModel;
