const user = async (_, args, { dataSources }) => {
  const userData = await dataSources.userApi.getUser(args.id);
  return userData;
};

const users = async (_, args, { dataSources }) => {
  const usersData = await dataSources.userApi.getUsers(args.inputFields);
  return usersData;
};

const posts = async (parent, _, { dataSources }) => (
  dataSources.postApi.batchLoadByUserId(parent.id)
);

export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
