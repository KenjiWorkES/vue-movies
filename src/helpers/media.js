const MEDIA_URL = import.meta.env.VITE_MEDIA_URL;

export const getSingleMedia = async (mediaId) => {
  const requestUrl = MEDIA_URL + mediaId;

  const response = await fetch(requestUrl);

  const media = await response.json();
  return media;
};
