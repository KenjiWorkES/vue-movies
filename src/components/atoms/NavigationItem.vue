<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['iconId', 'path']);

const id = '#' + props.iconId;
const route = useRoute();
const isActive = ref(route.fullPath === props.path ? true : false);

const checkActiveHandler = () => {
  route.fullPath === props.path
    ? (isActive.value = true)
    : (isActive.value = false);
};

watch(() => route.fullPath, checkActiveHandler);
</script>

<template>
  <router-link :to="props.path">
    <li class="header__item">
      <svg :class="{ header__icon: true, 'header__icon--active': isActive }">
        <use :href="id" :xlink-href="id" />
      </svg>
    </li>
  </router-link>
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
