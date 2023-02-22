<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';

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
    <motion-grid
      v-if="tvSeriesPictures.length > 0"
      :motion-pictures="tvSeriesPictures"
    ></motion-grid>
    <not-found v-else text="No TV Series Found"></not-found>
  </div>
</template>
