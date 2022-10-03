import DataLoader from 'dataloader';

export const makePostsDataLoader = (getPosts) => new DataLoader(async (ids) => {
  const path = `?userId=${ids.join('&userId=')}`;
  const postData = await getPosts(path);
  return ids.map((id) => postData.filter((post) => post.userId === id));
});
