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
  grid-template-columns: repeat(auto-fit, minmax(16.4rem, 1.8rem));
  column-gap: 1.5rem;
}
</style>
