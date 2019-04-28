import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home.vue';
import PendingList from './views/incidents/pending-list/pending-list.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      redirect: { name: 'pending-list' },
    },
    {
      path: '/incidents/pending-list',
      name: 'pending-list',
      component: () => import(/* webpackChunkName: "pending-list" */ './views/incidents/pending-list/pending-list.vue'),
    },
    {
      path: '/forces/ground-forces',
      name: 'ground-forces',
      component: () => import(/* webpackChunkName: "ground-forces" */ './views/forces/ground-forces/ground-forces.vue'),
    },
  ],
});
