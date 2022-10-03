import DataLoader from 'dataloader';

export const makeUserDataLoader = (getUsers) => new DataLoader(async (ids) => {
  const path = `?id=${ids.join('&id=')}`;
  const userData = await getUsers(path);
  return ids.map((id) => userData.find((user) => user.id === id));
});
