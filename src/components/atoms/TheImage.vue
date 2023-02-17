<script setup>
const props = defineProps(['src', 'alt']);
</script>

<template>
  <img :src="props.src" :alt="props.alt" class="picture" />
</template>

<style scoped lang="scss">
.picture {
  width: 100%;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
}
</style>
