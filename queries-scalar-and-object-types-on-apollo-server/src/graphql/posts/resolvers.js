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

export const postResolvers = {
  Query: { post, posts },
  Post: {
    timestamp: (parent) => {
      const timestamp = new Date(parent.createdAt);
      return timestamp;
    },
  },
};
