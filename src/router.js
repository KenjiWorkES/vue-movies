import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import TvPage from './components/pages/TvPage.vue';
import MoviesPage from './components/pages/MoviesPage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/tv-shows', component: TvPage },
    { path: '/movies', component: MoviesPage },
    { path: '/favorites', component: FavoritesPage },
  ],
});

export default router;
