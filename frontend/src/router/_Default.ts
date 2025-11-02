import { PageName } from '@/utils/_Constants';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HowItWorks from '../views/HowItWorks.vue';
import SwipeGame from '../views/SwipeGame.vue';
import Results from '../views/Results.vue';

const routes = [
  {
    path: '/',
    name: PageName.HOME,
    component: Home,
  },
  {
    path: '/how-it-works',
    name: 'HOW_IT_WORKS',
    component: HowItWorks,
  },
  {
    path: '/game',
    name: 'SWIPE_GAME',
    component: SwipeGame,
  },
  {
    path: '/results',
    name: 'RESULTS',
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
