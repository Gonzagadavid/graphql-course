import fetch from 'node-fetch';
import { makeUserDataLoader } from './graphql/users/dataLoader.js';
import { getUsers } from './graphql/users/utils.js';

export const context = () => ({
  userDataLoader: makeUserDataLoader(getUsers),
  getUsers,
  getPosts: (path = '') => fetch(`http://localhost:3000/posts/${path}`),
});
