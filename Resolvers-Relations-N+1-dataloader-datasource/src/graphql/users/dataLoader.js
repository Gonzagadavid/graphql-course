import DataLoader from 'dataloader';

export const makeUserDataLoader = (getUsers) => new DataLoader(async (ids) => {
  const path = `?id=${ids.join('&id=')}`;
  const data = await getUsers(path);
  const userData = await data.json();
  return ids.map((id) => userData.find((user) => user.id === id));
});
