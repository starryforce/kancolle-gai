import Vue from 'vue';
import Router from 'vue-router';
import MainHome from '@/components/MainHome';
import MainTutorial from '@/components/MainTutorial';
import MainTool from '@/components/MainTool';
import CardDetail from '@/components/CardDetail';
import MainConsole from '@/components/MainConsole';
import MainConsoleShip from '@/components/MainConsoleShip';
import MainConsoleShipType from '@/components/MainConsoleShipType';
import MainConsoleCard from '@/components/MainConsoleCard';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: MainHome,
  },
  {
    path: '/home',
    name: 'home',
    component: MainHome,
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: MainTutorial,
  },
  {
    path: '/tool',
    name: 'tool',
    component: MainTool,
  },
  {
    path: '/console',
    name: 'console',
    component: MainConsole,
    children: [
      {
        path: 'ship',
        name: 'ship',
        component: MainConsoleShip,
      },
      {
        path: 'shiptype',
        name: 'shiptype',
        component: MainConsoleShipType,
      },
      {
        path: 'card',
        name: 'card',
        component: MainConsoleCard,
      },
    ],
  },
  {
    path: '/cardDetail/:cardId',
    name: 'cardDetail',
    component: CardDetail,
  },
  ],
});
