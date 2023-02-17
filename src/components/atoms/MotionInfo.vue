<script setup>
const props = defineProps(['text', 'hasIcon', 'iconId']);
const id = '#' + props.iconId;
</script>

<template>
  <li class="card__item">
    <svg v-if="hasIcon" class="card__itemIcon">
      <use class="card__svg" :href="id" :xlink-href="id" />
    </svg>
    <span>{{ props.text }}</span>
  </li>
</template>

<style scoped lang="scss">
.card {
  &__item {
    font-size: var(--font-size-xs);
    font-weight: 300;
    display: flex;
    align-items: center;

    @media screen and (min-width: 768px) {
      font-size: var(--font-size-s);
    }

    &:first-child {
      list-style: none;
    }
  }

  &__itemIcon {
    width: 1rem;
    height: 1rem;
    fill: var(--color-white);
    margin-right: 0.4rem;
  }

  &__svg {
    display: inline-block;
    width: 500px;
  }
}
</style>
