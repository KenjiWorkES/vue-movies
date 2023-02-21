<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MotionCard from '../molecules/MotionCard.vue';

const props = defineProps(['isTrending']);
const store = useStore();

const motionPictures = computed(() => {
  return store.getters['motionPicture/motionPictures'];
});
</script>

<template>
  <section :class="{ cardGrid: true, 'cardGrid--trending': isTrending }">
    <motion-card
      v-for="motion in motionPictures"
      :key="motion.id"
      :title="motion.title"
      :year="motion.year"
      :rating="motion.rating"
      :image="
        !isTrending ? motion.thumbnail.regular : motion.thumbnail.trending
      "
      :is-trending="isTrending"
    ></motion-card>
  </section>
</template>

<style scoped lang="scss">
.cardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 16.4rem));
  column-gap: 1.5rem;
  row-gap: 1.6rem;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(16.4rem, 22rem));
    column-gap: 3rem;
    row-gap: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(22rem, 28rem));
    column-gap: 4rem;
    row-gap: 3.2rem;
  }

  &--trending {
    display: flex;
    justify-content: flex-start;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
