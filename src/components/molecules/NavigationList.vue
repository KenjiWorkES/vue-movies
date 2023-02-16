<script setup>
import NavigationItem from '../atoms/NavigationItem.vue';
</script>

<template>
  <nav class="header__nav">
    <ul class="header__list">
      <navigation-item icon-id="all" path="/" />
      <navigation-item icon-id="movies" path="/movies" />
      <navigation-item icon-id="tv" path="/tv-shows" />
      <navigation-item icon-id="bookmark" path="/favorites" />
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.header {
  &__nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px) {
      align-items: flex-start;
    }
  }

  &__list {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 2.4rem;

    @media screen and (min-width: 1024px) {
      flex-direction: column;
      row-gap: 4rem;
    }
  }
}
</style>
