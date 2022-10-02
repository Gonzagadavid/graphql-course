const user = () => ({
  id: '232dddes2',
  userName: 'David',
});

const users = () => [
  {
    id: '232dddes2',
    userName: 'David',
  },
  {
    id: '232dddes3',
    userName: 'Gonzaga',
  },
];

export const userResolvers = {
  Query: { user, users },
};
