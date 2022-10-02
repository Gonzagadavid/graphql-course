const post = () => ({
  id: 'dsfsdfsd1223ds',
  title: 'Eleições',
  body: 'Eleições 2022 terá efeito revolucionário',
});

const posts = async (_, __, context) => {
  const data = await context.getPosts();
  const postsData = data.json();
  return postsData;
};

export const postResolvers = {
  Query: { post, posts },
};
