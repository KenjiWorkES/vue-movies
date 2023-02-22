<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';
import SearchInput from '../atoms/SearchInput.vue';
import useSearch from '../../hooks/search';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const moviesTitle = ref('Movies');

const store = useStore();

const moviesPictures = computed(() => {
  return store.getters['motionPicture/moviesPictures'];
});

const { filteredMotions, searchHandler } = useSearch(
  moviesPictures,
  moviesTitle
);
</script>

<template>
  <div>
    <search-input
      @on-submit="searchHandler"
      placeholder="Search for movies"
    ></search-input>
    <the-heading :text="moviesTitle"></the-heading>
    <motion-grid
      v-if="filteredMotions.length > 0"
      :motion-pictures="filteredMotions"
    ></motion-grid>
    <not-found v-else text="No Movies Found"></not-found>
  </div>
</template>
