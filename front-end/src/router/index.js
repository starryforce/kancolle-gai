import Vue from 'vue';
import Router from 'vue-router';
import MainHome from '@/components/MainHome';
import MainTutorial from '@/components/MainTutorial';
import MainTool from '@/components/MainTool';
import CardDetail from '@/components/CardDetail';
import MainConsole from '@/components/MainConsole';
import MainConsoleShips from '@/components/MainConsoleShips';

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
        path: 'ships',
        name: 'ships',
        component: MainConsoleShips,
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
