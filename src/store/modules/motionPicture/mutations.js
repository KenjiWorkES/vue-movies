export default {
  setMotions(state, payload) {
    state.motionPictures = payload;
  },
  changeBookmark(state, payload) {
    const { id, value } = payload;

    for (const motion of state.motionPictures) {
      if (motion.id === id) {
        motion.isBookmarked = value;
        break;
      }
    }
  },
};
