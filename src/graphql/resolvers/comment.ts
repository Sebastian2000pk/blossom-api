import { commentServices } from "@/services/commentServices";

export const commentResolver = {
  Query: {
    comments: async ({ characterId }: any) => {
      return await commentServices.getAllComments(characterId);
    },
  },
  Mutation: {
    createComment: async ({ content, characterId }: any) => {
      return await commentServices.createComment({ content, characterId });
    },
  },
};
