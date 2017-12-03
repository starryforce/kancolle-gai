import Vue from 'vue';
import Router from 'vue-router';
import HomeMain from '@/components/HomeMain';
import ConsoleMain from '@/components/ConsoleMain';
import ConsoleShipType from '@/components/ConsoleShipType';
import ConsoleShip from '@/components/ConsoleShip';
import ConsoleCard from '@/components/ConsoleCard';

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
  {
    path: '/console',
    name: 'console',
    component: ConsoleMain,
    children: [
      {
        path: 'ship',
        name: 'ship',
        component: ConsoleShip,
      },
      {
        path: 'shiptype',
        name: 'shiptype',
        component: ConsoleShipType,
      },
      {
        path: 'card',
        name: 'card',
        component: ConsoleCard,
      },
    ],
  },
  ],
});
