<script setup>
import TheHeader from './components/organisms/TheHeader.vue';
import TheLoading from './components/atoms/TheLoading.vue';
import TheSvg from './components/ions/TheSvg.vue';

import { useStore } from 'vuex';
import { ref } from 'vue';

const isLoading = ref(false);
const store = useStore();

const getMotions = async () => {
  isLoading.value = true;
  await store.dispatch('motionPicture/fetchAllMotionPictures');
  isLoading.value = false;
};

getMotions();
</script>

<template>
  <div class="layout">
    <the-loading v-if="isLoading"></the-loading>
    <the-svg />
    <the-header />
    <main class="main">
      <transition name="router" mode="in-out">
        <router-view></router-view>
      </transition>
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
  --color-blue-600-05: rgba(16, 20, 30, 0.5);
  --color-blue-600-08: rgba(16, 20, 30, 0.8);

  --color-white: #fff;

  --font-size-xl: 3.2rem;
  --font-size-l: 2.4rem;
  --font-size-sl: 2rem;
  --font-size-m: 1.8rem;
  --font-size-s: 1.6rem;
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
    column-gap: 3.6rem;
  }
}

.main {
  padding: 0 1.6rem;
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
}

.router {
  &-enter-to,
  &-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(5px);
  }

  &-enter-active {
    transition: all 0.3s ease-in;
  }
  &-leave-active {
    transition: all 0.3s ease-out;
  }
}
</style>
