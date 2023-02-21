export default {
  setMotions(state, payload) {
    console.log(payload);
    state.motionPictures = payload;
  },
};
