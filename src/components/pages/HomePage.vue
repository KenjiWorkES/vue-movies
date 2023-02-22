<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';

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
      v-if="trendingMotionPictures.length > 0"
      :is-trending="true"
      :motion-pictures="trendingMotionPictures"
    ></motion-grid>
    <not-found v-else text="No Trending Found"></not-found>
    <the-heading text="Recommended for you"></the-heading>
    <motion-grid
      v-if="allMotionPictures.length > 0"
      :motion-pictures="allMotionPictures"
    ></motion-grid>
    <not-found v-else text="No Motion Pictures Found"></not-found>
  </div>
</template>
