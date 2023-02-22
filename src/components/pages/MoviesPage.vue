<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const moviesPictures = computed(() => {
  return store.getters['motionPicture/moviesPictures'];
});
</script>

<template>
  <div>
    <the-heading text="Movies"></the-heading>
    <motion-grid
      v-if="moviesPictures.length > 0"
      :motion-pictures="moviesPictures"
    ></motion-grid>
    <not-found v-else text="No Movies Found"></not-found>
  </div>
</template>
