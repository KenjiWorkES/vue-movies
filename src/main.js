import { createApp } from 'vue';
import router from './router';
import store from './store';

import VueDragscroll from 'vue-dragscroll';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueDragscroll);

app.mount('#app');
