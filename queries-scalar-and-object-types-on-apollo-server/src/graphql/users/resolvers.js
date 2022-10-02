const user = async (_, args, context) => {
  const data = await context.getUsers(args.id);
  const userData = await data.json();
  return userData;
};

const users = async (_, args, context) => {
  const inputFields = new URLSearchParams(args.input);
  const data = await context.getUsers(`/?${inputFields.toString()}`);
  const usersData = await data.json();
  return usersData;
};

export const userResolvers = {
  Query: { user, users },
};
