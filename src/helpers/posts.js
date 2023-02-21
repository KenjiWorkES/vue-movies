const POSTS_URL = import.meta.env.VITE_POSTS_URL;

export const getMotions = async () => {
  console.log(POSTS_URL);

  const response = await fetch(POSTS_URL);
  const motions = await response.json();
  return motions;
};
