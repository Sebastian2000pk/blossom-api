export const commentResolver = {
  Query: {
    comments: async ({ characterId }: any) => {
      return await [characterId];
    },
  },
  Mutation: {
    createComment: async ({ content, characterId }: any) => {
      return await { content, characterId };
    },
  },
};
