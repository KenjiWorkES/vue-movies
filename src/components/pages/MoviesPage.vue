<script setup>
import MotionGrid from '../organisms/MotionGrid.vue';
</script>

<template>
  <div class="container">
    <h1>Movies Page</h1>
    <motion-grid :is-trending="true"></motion-grid>
    <motion-grid></motion-grid>
  </div>
</template>
