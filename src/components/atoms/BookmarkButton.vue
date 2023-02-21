<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const onClickHandler = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <button class="favorite" @click="onClickHandler">
    <svg :class="{ favorite__icon: true, 'favorite__icon--active': isActive }">
      <use href="#bookmark10" xlink-href="#bookmark" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.favorite {
  position: absolute;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1.6rem;
  right: 1.6rem;
  border-radius: 9999px;
  border: none;
  background-color: var(--color-blue-600-05);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-white);
  }

  &:hover &__icon {
    stroke: var(--color-blue-600);
  }

  &__icon {
    width: 1.2rem;
    height: 1.4rem;
    fill: none;
    stroke: var(--color-white);
    stroke-width: 1.5px;

    &--active {
      fill: var(--color-white);
    }
  }
}
</style>
