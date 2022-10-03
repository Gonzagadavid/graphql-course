const post = async (_, args, { dataSources }) => {
  const postData = await dataSources.postApi.getPost(args.id);
  return postData;
};

const posts = async (_, args, { dataSources }) => {
  const postsData = await dataSources.postApi.getPosts(args.inputFields);
  return postsData;
};

const user = async (parent, _, { dataSources }) => (
  dataSources.userApi.batchLoadByPostId(parent.userId)
);

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
