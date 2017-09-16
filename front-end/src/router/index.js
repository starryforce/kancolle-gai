import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/views/Home';
import Tutorial from '@/views/Tutorial';
import Tool from '@/views/Tool';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
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
  ],
});
