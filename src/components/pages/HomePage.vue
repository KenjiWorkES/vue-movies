<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';
import SearchInput from '../atoms/SearchInput.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import useSearch from '../../hooks/search';

const allMotionsTitle = ref('Recommended for you');

const store = useStore();

const allMotionPictures = computed(() => {
  return store.getters['motionPicture/motionPictures'];
});

const { filteredMotions, searchHandler, alreadySearch } = useSearch(
  allMotionPictures,
  allMotionsTitle
);

const trendingMotionPictures = computed(() => {
  return store.getters['motionPicture/trendingPictures'];
});
</script>

<template>
  <div>
    <search-input
      @on-submit="searchHandler"
      placeholder="Search for movies or TV series"
    ></search-input>
    <the-heading v-if="!alreadySearch" text="Trending"></the-heading>
    <motion-grid
      v-if="trendingMotionPictures.length > 0 && !alreadySearch"
      :is-trending="true"
      :motion-pictures="trendingMotionPictures"
    ></motion-grid>
    <not-found
      v-else-if="trendingMotionPictures.length <= 0 && !alreadySearch"
      text="No Trending Found"
    ></not-found>
    <the-heading :text="allMotionsTitle"></the-heading>
    <motion-grid
      v-if="filteredMotions.length > 0"
      :motion-pictures="filteredMotions"
    ></motion-grid>
    <not-found v-else text="No Motion Pictures Found"></not-found>
  </div>
</template>
