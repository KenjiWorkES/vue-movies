<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MotionCard from '../molecules/MotionCard.vue';

const store = useStore();

const motionPictures = computed(() => {
  return store.getters['motionPicture/motionPictures'];
});
</script>

<template>
  <section class="cardGrid">
    <motion-card
      v-for="motion in motionPictures"
      :key="motion.title"
      :title="motion.title"
      :year="motion.year"
      :rating="motion.rating"
      :image="motion.thumbnail.regular"
    ></motion-card>
  </section>
</template>

<style scoped lang="scss">
.cardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 16.4rem));
  column-gap: 1.5rem;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(16.4rem, 22rem));
    column-gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(22rem, 28rem));
    column-gap: 4rem;
  }
}
</style>
