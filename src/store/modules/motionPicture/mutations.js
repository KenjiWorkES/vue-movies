export default {
  setMotions(state, payload) {
    console.log(payload);
    state.motionPictures = payload;
  },
  changeBookmark(state, payload) {
    const { id, value } = payload;
    const markedMotion = state.motionPictures.find(
      (motion) => (motion.id = id)
    );

    const markedIndex = state.motionPictures.indexOf(markedMotion);

    markedMotion.isBookmarked = value;

    state.motionPictures[markedIndex] = markedMotion;
    console.log(markedIndex);
  },
};
