import { createStore } from 'vuex';
import motionPictureModule from './modules/motionPicture';

const store = createStore({
  modules: {
    motionPicture: motionPictureModule,
  },
});

export default store;
