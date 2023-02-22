const MEDIA_URL = 'https://teste.kenjidev.com.br/wp-json/wp/v2/media/';

export const getSingleMedia = async (mediaId) => {
  const requestUrl = MEDIA_URL + mediaId;

  const response = await fetch(requestUrl);

  const media = await response.json();
  return media;
};
