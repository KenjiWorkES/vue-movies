<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
import TheHeading from '../atoms/TheHeading.vue';
import NotFound from '../molecules/NotFound.vue';
import SearchInput from '../atoms/SearchInput.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import useSearch from '../../hooks/search';

const bookmarkSearchTitle = ref('');

const store = useStore();

const allBookmarkedMotions = computed(() => {
  return store.getters['motionPicture/bookmarkedPictures'];
});

const { filteredMotions, searchHandler, alreadySearch } = useSearch(
  allBookmarkedMotions,
  bookmarkSearchTitle
);

const bookmarkedMovies = computed(() => {
  return store.getters['motionPicture/bookmarkedMoviesPictures'];
});

const bookmarkedTvSeries = computed(() => {
  return store.getters['motionPicture/bookmarkedTvSeriesPictures'];
});
</script>

<template>
  <div>
    <search-input
      @on-submit="searchHandler"
      placeholder="Search for bookmarked"
    ></search-input>
    <the-heading v-if="!alreadySearch" text="Bookmarked Movies"></the-heading>
    <motion-grid
      v-if="bookmarkedMovies.length > 0 && !alreadySearch"
      :motion-pictures="bookmarkedMovies"
    ></motion-grid>
    <not-found
      v-else-if="bookmarkedMovies.length <= 0 && !alreadySearch"
      text="You don't have any movie bookmarked"
    ></not-found>
    <the-heading
      v-if="!alreadySearch"
      text="Bookmarked TV Series"
    ></the-heading>
    <motion-grid
      v-if="bookmarkedTvSeries.length > 0 && !alreadySearch"
      :motion-pictures="bookmarkedTvSeries"
    ></motion-grid>
    <not-found
      v-else-if="bookmarkedTvSeries.length <= 0 && !alreadySearch"
      text="You don't have any tv serie bookmarked"
    ></not-found>

    <!--search grid-->
    <the-heading :text="bookmarkSearchTitle"></the-heading>
    <motion-grid
      v-if="filteredMotions.length > 0 && alreadySearch"
      :motion-pictures="filteredMotions"
    ></motion-grid>
    <not-found
      v-else-if="filteredMotions.length <= 0 && alreadySearch"
      text="Not found"
    ></not-found>
  </div>
</template>
