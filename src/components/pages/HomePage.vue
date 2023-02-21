<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const allMotionPictures = computed(() => {
  return store.getters['motionPicture/motionPictures'];
});

const trendingMotionPictures = computed(() => {
  return store.getters['motionPicture/trendingPictures'];
});
</script>

<template>
  <div>
    <h1>Movies Page</h1>
    <motion-grid
      :is-trending="true"
      :motion-pictures="trendingMotionPictures"
    ></motion-grid>
    <motion-grid :motion-pictures="allMotionPictures"></motion-grid>
  </div>
</template>
