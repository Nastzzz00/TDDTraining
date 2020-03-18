import { mergeResolvers } from "merge-graphql-schemas";
import { IResolvers } from "graphql-tools";

import cat from "./cat";

const resolvers: IResolvers[] = [cat];

export default mergeResolvers(resolvers);
