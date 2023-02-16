<script setup>
import TheHeader from './components/organisms/TheHeader.vue';
import TheSvg from './components/ions/TheSvg.vue';
</script>

<template>
  <div class="layout">
    <the-svg />
    <the-header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

:root {
  --font-family: 'Outfit', sans-serif;
  --color-red-400: #fc4747;
  --color-blue-200: #5a698f;
  --color-blue-400: #161d2f;
  --color-blue-600: #10141e;
  --color-white: #fff;

  --font-size-xl: 3.2rem;
  --font-size-l: 2.4rem;
  --font-size-m: 1.8rem;
  --font-size-s: 1.5rem;
  --font-size-xs: 1.3rem;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: var(--font-family);
  background-color: var(--color-blue-600);
  color: var(--color-white);
}

.layout {
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 9.6rem auto;
    padding: 0;
    padding: 3.2rem;
    padding-right: 0;
  }
}
</style>
