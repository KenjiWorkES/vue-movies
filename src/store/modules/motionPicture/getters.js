export default {
  motionPictures(state) {
    return state.motionPictures;
  },
  trendingPictures(state) {
    return state.motionPictures.filter((motion) => motion.isTrending);
  },
};
