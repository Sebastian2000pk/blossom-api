// Resolvers
import { charactersResolver } from "./character";
import { commentResolver } from "./comment";

export const resolver = {
  ...charactersResolver,
  ...commentResolver,
};
