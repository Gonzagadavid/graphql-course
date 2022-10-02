import DataLoader from 'dataloader';
import fetch from 'node-fetch';

const post = async (_, args, context) => {
  const data = await context.getPosts(args.id);
  const postData = await data.json();
  return postData;
};

const posts = async (_, args, context) => {
  const inputFields = new URLSearchParams(args.input);
  const data = await context.getPosts(`/?${inputFields.toString()}`);
  const postsData = data.json();
  return postsData;
};

const userDataLoader = new DataLoader(async (ids) => {
  const path = `http://localhost:3000/users/?id=${ids.join('&id=')}`;
  const data = await fetch(path);
  const userData = await data.json();
  return ids.map((id) => userData.find((user) => user.id === id));
});

const user = async (parent, _, context) => userDataLoader.load(parent.userId, context);

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
