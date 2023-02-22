<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';

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
    <motion-grid :motion-pictures="moviesPictures"></motion-grid>
  </div>
</template>
