import fetch from 'node-fetch';

export const context = () => ({
  getData: async (url) => {
    const data = await fetch(url);
    const resp = await data.json();

    return resp;
  },
});
