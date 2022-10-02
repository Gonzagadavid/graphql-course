const post = () => ({
  id: 'dsfsdfsd1223ds',
  title: 'Eleições',
  body: 'Eleições 2022 terá efeito revolucionário',
});

const posts = () => [
  {
    id: 'dsfsdfsd1223ds',
    title: 'Eleições',
    body: 'Eleições 2022 terá efeito revolucionário',
  },
  {
    id: 'dsfsdfsd5454fdf',
    title: 'Lagrimas aos alnafabetos funcionais',
    body: 'Pessoas que não conseguem interpretar o que lê derramam lágrimas ,por suas ilusões, nas eleições 2022',
  },
];

export const postResolvers = {
  Query: { post, posts },
};
