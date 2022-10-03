import { ApolloServer } from 'apollo-server';
import { PostsApi } from './graphql/posts/dataSources.js';
import { resolvers, typeDefs } from './graphql/schema.js';
import { UsersApi } from './graphql/users/dataSources.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    postApi: new PostsApi(),
    userApi: new UsersApi(),
  }),
});

// eslint-disable-next-line no-console
server.listen(4003).then(({ url }) => { console.log(`Server listening in ${url}`); });
