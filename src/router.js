import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Health from './components/Health.vue';
import ListTraining from './components/ListTraining.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/health', component: Health },
  { path: '/training', component: ListTraining },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
