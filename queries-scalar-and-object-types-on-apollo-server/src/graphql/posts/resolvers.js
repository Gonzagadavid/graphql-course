const post = async (_, args, context) => {
  const data = await context.getPosts(args.id);
  if (!data.ok) {
    return {
      statusCode: 404,
      message: 'post not found',
    };
  }
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
  PostResult: {
    __resolveType: (obj) => {
      if (obj.statusCode) return 'PostNotFoundError';
      if (obj.id) return 'Post';
      return null;
    },
  },
};
