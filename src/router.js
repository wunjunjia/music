import Vue from 'vue';
import Router from 'vue-router';
// import Recommend from '@/views/Recommend/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/recommend',
      component: () => import('@/views/Recommend/index.vue'),
      children: [
        {
          path: ':id',
          component: () => import('@/views/Recommend/CdDetail/index.vue'),
        },
      ],
    },
    {
      path: '/singer',
      component: () => import('@/views/Singer/index.vue'),
      children: [
        {
          path: ':serial',
          component: () => import('@/views/Singer/SingerDetail/index.vue'),
        },
      ],
    },
    {
      path: '/rank',
      component: () => import('@/views/Rank/index.vue'),
    },
    {
      path: '/search',
      component: () => import('@/views/Search/index.vue'),
    },
  ],
});
