<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const tvSeriesPictures = computed(() => {
  return store.getters['motionPicture/tvSeriesPictures'];
});
</script>

<template>
  <div>
    <the-heading text="TV Series"></the-heading>
    <motion-grid :motion-pictures="tvSeriesPictures"></motion-grid>
  </div>
</template>
