const user = async (_, args, context) => {
  const data = await context.getUsers(args.id);
  const userData = await data.json();
  return userData;
};

const users = async (_, __, context) => {
  const data = await context.getUsers();
  const usersData = await data.json();
  return usersData;
};

export const userResolvers = {
  Query: { user, users },
};
