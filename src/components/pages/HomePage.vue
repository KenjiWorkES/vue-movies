<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';

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
    <the-heading text="Trending"></the-heading>
    <motion-grid
      :is-trending="true"
      :motion-pictures="trendingMotionPictures"
    ></motion-grid>
    <the-heading text="Recommended for you"></the-heading>
    <motion-grid :motion-pictures="allMotionPictures"></motion-grid>
  </div>
</template>
