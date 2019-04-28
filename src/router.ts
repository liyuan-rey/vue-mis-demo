import Vue from 'vue';
import Router from 'vue-router';

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
      path: '/forces/officer-list',
      name: 'officer-list',
      component: () => import(/* webpackChunkName: "ground-forces" */ './views/forces/officer-list/officer-list.vue'),
    },
  ],
});
