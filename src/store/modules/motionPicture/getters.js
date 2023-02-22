export default {
  motionPictures(state) {
    return state.motionPictures;
  },
  trendingPictures(state) {
    return state.motionPictures.filter((motion) => motion.isTrending);
  },
  moviesPictures(state) {
    return state.motionPictures.filter((motion) => motion.category === 'Movie');
  },
  tvSeriesPictures(state) {
    return state.motionPictures.filter(
      (motion) => motion.category === 'TV Series'
    );
  },
};
