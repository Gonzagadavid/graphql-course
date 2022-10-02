import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';

const server = new ApolloServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
