import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker-dark-paper-8916.malekaydi.workers.dev/download-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
const app = createApp(App);
app.use(router);
app.mount('#app');
