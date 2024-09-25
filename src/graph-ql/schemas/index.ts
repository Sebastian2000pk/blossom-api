import { buildSchema } from "graphql";
import { queries } from "./queries";
import { mutations } from "./mutations";

// Schemas
import { characterSchema } from "./character";
import { commentSchema } from "./comment";

export const schema = buildSchema(
  characterSchema + commentSchema + queries + mutations
);
