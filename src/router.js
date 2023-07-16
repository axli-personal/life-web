import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Health from './components/Health.vue';
import Training from './components/Training.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/health', component: Health },
  { path: '/training', component: Training },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
