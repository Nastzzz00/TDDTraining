import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "../graphql";

const constructTestServer = ({ context = {} }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: session => context
  });

  return { server, context };
};

export { constructTestServer };
