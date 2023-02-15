<script setup>
import { defineProps } from 'vue';

const props = defineProps(['iconId']);
const id = '#' + props.iconId;
</script>

<template>
  <li class="header__item">
    <svg class="header__icon">
      <use :href="id" :xlink-href="id" />
    </svg>
  </li>
</template>

<style scoped lang="scss">
.header {
  &__item {
  }

  &__icon {
    width: 2rem;
    height: 2rem;
    fill: var(--color-blue-200);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      fill: var(--color-white);
    }

    &--active {
      fill: var(--color-white);
    }
  }
}
</style>
