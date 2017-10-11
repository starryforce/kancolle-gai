import Vue from 'vue';
import Router from 'vue-router';
import MainHome from '@/components/MainHome';
import MainTutorial from '@/components/MainTutorial';
import MainTool from '@/components/MainTool';
import CardDetail from '@/components/CardDetail';

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
    name: 'mainTutorial',
    component: MainTutorial,
  },
  {
    path: '/tool',
    name: 'mainTool',
    component: MainTool,
  },
  {
    path: '/carddetail/:cardId',
    name: 'cardDetail',
    component: CardDetail,
  },
  ],
});
