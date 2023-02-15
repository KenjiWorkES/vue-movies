<script setup>
import NavigationList from '../molecules/NavigationList.vue';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <img class="header__logo" src="/assets/logo.png" alt="Logo Image" />
      <navigation-list />
      <img class="header__user" src="/assets/user.svg" alt="Logo Image" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 2.4rem 2.4rem 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    grid-column: 1 / 2;
    grid-row: 1/-1;
    height: 100%;
  }

  &__container {
    widows: 100%;
    height: 100%;
    padding: 1.8rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-blue-400);

    @media screen and (min-width: 768px) {
      border-radius: 1rem;
    }

    @media screen and (min-width: 1024px) {
      padding: 3.5rem 3.2rem;
      flex-direction: column;
      row-gap: 7.5rem;
    }
  }

  &__logo {
    height: 2rem;
    width: 2.5rem;

    @media screen and (min-width: 768px) {
      height: 2.56rem;
      width: 3.2rem;
    }
  }

  &__user {
    height: 2.4rem;
    widows: 2.4rem;

    @media screen and (min-width: 768px) {
      height: 3.2rem;
      width: 3.2rem;
    }

    @media screen and (min-width: 1024px) {
      height: 4rem;
      width: 4rem;
    }
  }
}
</style>
