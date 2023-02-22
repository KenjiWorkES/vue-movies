const POSTS_URL =
  'https://teste.kenjidev.com.br/wp-json/wp/v2/motion?per_page=100';

export const getMotions = async () => {
  console.log(POSTS_URL);

  const response = await fetch(POSTS_URL);
  const motions = await response.json();
  return motions;
};
