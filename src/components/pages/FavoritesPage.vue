<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';

import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const bookmarkedMovies = computed(() => {
  return store.getters['motionPicture/bookmarkedMoviesPictures'];
});

const bookmarkedTvSeries = computed(() => {
  return store.getters['motionPicture/bookmarkedTvSeriesPictures'];
});
</script>

<template>
  <div>
    <the-heading text="Bookmarked Movies"></the-heading>
    <motion-grid
      v-if="bookmarkedMovies.length > 0"
      :motion-pictures="bookmarkedMovies"
    ></motion-grid>
    <not-found v-else text="You don't have any movie bookmarked"></not-found>
    <the-heading text="Bookmarked TV Series"></the-heading>

    <motion-grid
      v-if="bookmarkedTvSeries.length > 0"
      :motion-pictures="bookmarkedTvSeries"
    ></motion-grid>
    <not-found v-else text="You don't have any tv serie bookmarked"></not-found>
  </div>
</template>
