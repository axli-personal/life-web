import Home from './components/Home.vue';
import Health from './components/Health.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/health', component: Health },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
