import { ApolloServer } from 'apollo-server';
import { context } from './context.js';
import { PostsApi } from './graphql/posts/dataSources.js';
import { resolvers, typeDefs } from './graphql/schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => ({
    postApi: new PostsApi(),
  }),
});

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
