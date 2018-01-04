import Vue from 'vue';
import Router from 'vue-router';
import HomeMain from '@/components/HomeMain';
import ConsoleMain from '@/components/ConsoleMain';
import ConsoleShipType from '@/components/ConsoleShipType';
import ConsoleShip from '@/components/ConsoleShip';
import ConsoleCard from '@/components/ConsoleCard';
import ExploreCards from '@/components/ExploreCards';
import CardDetail from '@/components/CardDetail';
import UserLogin from '@/components/UserLogin';
import UserRegister from '@/components/UserRegister';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    path: '/login',
    name: 'login',
    component: UserLogin,
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister,
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
        path: 'ship_type',
        name: 'shipType',
        component: ConsoleShipType,
      },
      {
        path: 'card',
        name: 'card',
        component: ConsoleCard,
      },
    ],
  },
  {
    path: '/explore/:sort',
    name: 'explore',
    component: ExploreCards,
    props: true,
  },
  {
    path: '/category',
    name: 'category',
    component: ExploreCards,
  },
  {
    path: '/card_detail/:id',
    name: 'cardDetail',
    component: CardDetail,
    props: true,
  },
  ],
});
