import Vue from 'vue';
import Router from 'vue-router';

import Stock from './views/Stock.vue';
import In from './views/In.vue';
import Out from './views/Out.vue';
import Account from './views/Account.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/blog-overview',
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock,
    },
    {
      path: '/in',
      name: 'in',
      component: In,
    },
    {
      path: '/out',
      name: 'out',
      component: Out,
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
    },
  ],
});
