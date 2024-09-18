export const queries = `
type Query {
  comments(characterId: ID!): [Comment]!
  characters(name: String, status: String, species: String, gender: String): [Character]!
}
`;
