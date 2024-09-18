import CommentModel from "@/models/comment";
import { Comment } from "@/interfaces/comment";

export const commentServices = {
  getAllComments: async (characterId: number): Promise<Comment[]> => {
    return await CommentModel.findAll({ where: { characterId } });
  },
};
