<script setup>
const props = defineProps(['text']);
</script>

<template>
  <h2 class="heading">{{ props.text }}</h2>
</template>

<style scoped lang="scss">
.heading {
  font-size: var(--font-size-sl);
  line-height: 2.5rem;
  font-weight: 300;
  margin: 2.4rem 0;

  @media screen and (min-width: 768px) {
    font-size: var(--font-size-xl);
    line-height: 4rem;
    margin: 2.8rem 0;
  }
}
</style>
