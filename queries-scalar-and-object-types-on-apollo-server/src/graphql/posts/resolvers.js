const post = async (_, args, context) => {
  const data = await context.getPosts(args.id);
  const postData = await data.json();
  return postData;
};

const posts = async (_, __, context) => {
  const data = await context.getPosts();
  const postsData = data.json();
  return postsData;
};

export const postResolvers = {
  Query: { post, posts },
};
