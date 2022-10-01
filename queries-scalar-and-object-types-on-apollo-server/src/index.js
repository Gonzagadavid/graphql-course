import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type Query {
  id: ID!
  name: String!
  age: Int!
  average: Float!
  married: Boolean!
  arrayString: [String!]!
} 
`;

const resolvers = {
  Query: {
    id: () => '3232esddf-2',
    name: () => 'David',
    age: () => 34,
    average: () => 90.55,
    married: () => false,
    arrayString: () => [],
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
