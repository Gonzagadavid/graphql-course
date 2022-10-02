import DataLoader from 'dataloader';

export const makePostsDataLoader = (getPosts) => new DataLoader(async (ids) => {
  const path = `?userId=${ids.join('&userId=')}`;
  const data = await getPosts(path);
  const postData = await data.json();
  return ids.map((id) => postData.filter((post) => post.userId === id));
});
