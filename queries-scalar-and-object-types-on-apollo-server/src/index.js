import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type Query {
 user: User!
 users: [User!]!
} 

type User {
  id: ID!
  userName: String!
}
`;

const resolvers = {
  Query: {
    user: () => ({
      id: '232dddes2',
      userName: 'David',
    }),
    users: () => [
      {
        id: '232dddes2',
        userName: 'David',
      },
      {
        id: '232dddes3',
        userName: 'Gonzaga',
      },
    ],
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
