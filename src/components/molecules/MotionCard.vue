<script setup>
import TheImage from '../atoms/TheImage.vue';
import MotionInfo from '../atoms/MotionInfo.vue';
import BookmarkButton from '../atoms/BookmarkButton.vue';

const props = defineProps([
  'title',
  'year',
  'rating',
  'image',
  'isTrending',
  'category',
]);
</script>

<template>
  <figure :class="{ card: true, 'card--trending': isTrending }">
    <div class="card__imageContainer">
      <the-image
        :src="props.image"
        :alt="`Image of ${props.title}`"
      ></the-image>
      <bookmark-button />
    </div>
    <figcaption
      :class="{ card__caption: true, 'card__caption--trending': isTrending }"
    >
      <ul class="card__information">
        <motion-info :text="props.year"></motion-info>
        <motion-info
          :has-icon="true"
          :icon-id="props.category === 'Movie' ? 'movies10' : 'tv10'"
          :text="props.category"
        ></motion-info>
        <motion-info :text="props.rating"></motion-info>
      </ul>
      <h3 :class="{ card__title: true, 'card__title--trending': isTrending }">
        {{ props.title }}
      </h3>
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  position: relative;

  &--trending {
    min-width: 24rem;

    @media screen and (min-width: 768px) {
      min-width: 47rem;
    }
  }

  &__imageContainer {
    width: 100%;
    position: relative;
  }

  &__caption {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;

    &--trending {
      position: absolute;
      left: 1.6rem;
      bottom: 1.6rem;

      @media screen and (min-width: 768px) {
        left: 2.4rem;
        bottom: 2.4rem;
      }
    }
  }

  &__information {
    display: flex;
    list-style: disc;
    column-gap: 1.5rem;
    opacity: 0.75;
  }

  &__title {
    font-size: var(--font-size-s);
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: var(--font-size-m);
    }

    &--trending {
      @media screen and (min-width: 768px) {
        font-size: var(--font-size-l);
      }
    }
  }
}
</style>
