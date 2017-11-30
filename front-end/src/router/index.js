import Vue from 'vue';
import Router from 'vue-router';
import HomeMain from '@/components/HomeMain';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: HomeMain,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeMain,
  },
  ],
});
