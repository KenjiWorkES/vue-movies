<script setup>
const props = defineProps(['placeholder']);
</script>

<template>
  <form class="search">
    <button class="search__button">
      <svg class="search__icon">
        <use href="#search" xlink-href="#search" />
      </svg>
    </button>
    <input
      class="search__input"
      aria-label="search input"
      type="text"
      :placeholder="props.placeholder"
    />
  </form>
</template>

<style scoped lang="scss"></style>
