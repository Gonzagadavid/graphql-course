import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type Query {
  hello: String
} 
`;
const server = new ApolloServer({ typeDefs });

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
