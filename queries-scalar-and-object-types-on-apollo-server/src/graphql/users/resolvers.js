const user = () => ({
  id: '232dddes2',
  userName: 'David',
});

const users = async (_, __, { getData }) => {
  const usersData = await getData('http://localhost:3000/users');
  return usersData;
};

export const userResolvers = {
  Query: { user, users },
};
