import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type Query {
  hello: String
  hi: String
} 
`;

const resolvers = {
  Query: {
    hello: () => 'hello word!!',
    hi: () => 'Hi!',
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
