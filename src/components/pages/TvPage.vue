<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';
import SearchInput from '../atoms/SearchInput.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import useSearch from '../../hooks/search';

const tvSeriesTitle = ref('Recommended for you');

const store = useStore();

const tvSeriesPictures = computed(() => {
  return store.getters['motionPicture/tvSeriesPictures'];
});

const { filteredMotions, searchHandler } = useSearch(
  tvSeriesPictures,
  tvSeriesTitle
);
</script>

<template>
  <div>
    <search-input
      @on-submit="searchHandler"
      placeholder="Search for  TV series"
    ></search-input>
    <the-heading text="TV Series"></the-heading>
    <motion-grid
      v-if="filteredMotions.length > 0"
      :motion-pictures="filteredMotions"
    ></motion-grid>
    <not-found v-else text="No TV Series Found"></not-found>
  </div>
</template>
