<script setup>
import TheHeading from '../atoms/TheHeading.vue';
const props = defineProps(['text']);
</script>

<template>
  <article class="noBookmark">
    <img class="noBookmark__image" src="/assets/WarningCircle.svg" alt="" />
    <the-heading class="noBookmark__text" :text="props.text"></the-heading>
  </article>
</template>

<style scoped lang="scss">
.noBookmark {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__image {
    width: 10rem;

    @media screen and (min-width: 768px) {
      width: 15rem;
    }
  }

  &__text {
    color: var(--color-white);
    margin: 0;
    font-size: 2rem;
  }
}
</style>
