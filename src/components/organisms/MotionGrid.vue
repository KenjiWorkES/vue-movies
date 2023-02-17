<script setup>
import MotionCard from '../molecules/MotionCard.vue';
</script>

<template>
  <section class="cardGrid">
    <motion-card></motion-card>
    <motion-card></motion-card>
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
