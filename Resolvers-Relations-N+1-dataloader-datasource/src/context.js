import { makePostsDataLoader } from './graphql/posts/dataLoader.js';
import { getPosts } from './graphql/posts/utils.js';
import { makeUserDataLoader } from './graphql/users/dataLoader.js';
import { getUsers } from './graphql/users/utils.js';

export const context = () => ({
  getUsers,
  getPosts,
  userDataLoader: makeUserDataLoader(getUsers),
  postDataLoader: makePostsDataLoader(getPosts),
});
