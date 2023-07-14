import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

import 'element-plus/theme-chalk/index.css';

createApp(App).use(router).mount('#app');
