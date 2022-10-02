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

const user = async (parent, _, context) => {
  const data = await context.getUsers(parent.userId);
  const userData = await data.json();
  return userData;
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
