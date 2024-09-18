import { buildSchema } from "graphql";

// Schemas
import { characterSchema } from "./character";

export const schema = buildSchema(characterSchema);
