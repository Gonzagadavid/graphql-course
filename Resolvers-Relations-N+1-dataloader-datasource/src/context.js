import fetch from 'node-fetch';

export const context = () => ({
  getUsers: (path = '') => fetch(`http://localhost:3000/users/${path}`),
  getPosts: (path = '') => fetch(`http://localhost:3000/posts/${path}`),
});
