import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Tutorial from '@/views/Tutorial';
import Tool from '@/views/Tool';
import CardDetail from '@/views/CardDetail';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial,
  },
  {
    path: '/tool',
    name: 'Tool',
    component: Tool,
  },
  {
    path: '/carddetail/:cardId',
    name: 'CardDetail',
    component: CardDetail,
  },
  ],
});
