<script setup></script>

<template>
  <figure class="card">
    <div class="card__imageContainer">
      <img
        src="../../../public/assets/thumbnails/beyond-earth/regular/large.jpg"
        alt=""
        class="card__image"
      />
    </div>
    <figcaption class="card__caption">
      <ul class="card__information">
        <li class="card__item">2019</li>
        <li class="card__item">Movie</li>
        <li class="card__item">PG</li>
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

  &__image {
    width: 100%;
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
  }

  &__caption {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
  }

  &__information {
    display: flex;
    list-style: disc;
    column-gap: 2.6rem;
  }

  &__item {
    font-size: var(--font-size-xs);
    font-weight: 300;
  }

  &__title {
    font-size: var(--font-size-s);
    font-weight: 500;
  }
}
</style>
