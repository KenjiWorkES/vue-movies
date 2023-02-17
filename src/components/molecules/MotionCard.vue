<script setup>
import TheImage from '../atoms/TheImage.vue';
import MotionInfo from '../atoms/MotionInfo.vue';
</script>

<template>
  <figure class="card">
    <div class="card__imageContainer">
      <the-image
        src="../../../public/assets/thumbnails/beyond-earth/regular/large.jpg"
        alt=""
      ></the-image>
    </div>
    <figcaption class="card__caption">
      <ul class="card__information">
        <motion-info text="2019"></motion-info>
        <motion-info
          :has-icon="true"
          icon-id="movies10"
          text="Movie"
        ></motion-info>
        <motion-info text="PG"></motion-info>
      </ul>
      <h3 class="card__title">Beyond Earth</h3>
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.card {
  width: 100%;

  &__imageContainer {
    width: 100%;
  }

  &__caption {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
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
  }
}
</style>
