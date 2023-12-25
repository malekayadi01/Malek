// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '@/components/MainHome.vue';
import ContactPage from '@/components/ContactPage.vue';
import ProjectPage from '@/components/ProjectPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainHome,
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
