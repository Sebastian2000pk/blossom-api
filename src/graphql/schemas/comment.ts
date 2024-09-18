export const characterSchema = `
type Comment {
  id: ID!
  content: String!
  characterId: ID!
  createdAt: String!
  updatedAt: String!
}

type Query {
  comments(characterId: ID!): [Comment]!
}

type Mutation {
  createComment(content: String!, characterId: ID!): Comment!
}
`;
