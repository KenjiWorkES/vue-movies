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

<style scoped lang="scss">
.search {
  display: flex;
  column-gap: 1.6rem;

  &__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 9999px;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-white);
    }
  }

  &__icon {
    width: 3.2rem;
    height: 3.2rem;

    fill: var(--color-white);

    &:hover {
      fill: var(--color-blue-600);
    }
  }

  &__input {
    width: 100%;
    font-size: var(--font-size-m);
    font-weight: 300;
    color: var(--color-white);
    background-color: transparent;
    border: none;
    font-family: inherit;

    &:focus {
      border-bottom: 1px solid var(--color-blue-200);
      outline: none;
    }

    @media screen and (min-width: 768px) {
      font-size: var(--font-size-l);
    }

    &::placeholder {
      opacity: 0.5;
    }
  }
}
</style>
