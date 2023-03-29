import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { shoppingCartStorage } from '@/storage/storage';
import { useShoppingCartStore } from '@/stores/cart';

import './main.scss';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

const cartStore = useShoppingCartStore(pinia);
cartStore.items = shoppingCartStorage.value;

app.mount('#app');
