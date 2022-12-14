const post = async (_, args, context) => {
  const data = await context.getPosts(args.id);
  if (Math.random() > 0.5) {
    return {
      statusCode: 500,
      message: 'limit timeout',
      time: new Date(),
    };
  }
  if (!data.ok) {
    return {
      statusCode: 404,
      message: 'post not found',
      postId: args.id,
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
      if (obj.postId) return 'PostNotFoundError';
      if (obj.time) return 'PostTimeoutError';
      if (obj.id) return 'Post';
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (obj.postId) return 'PostNotFoundError';
      if (obj.time) return 'PostTimeoutError';
      return null;
    },
  },
};
