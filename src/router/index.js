import Vue from 'vue';
import VueRouter from 'vue-router';
import ListsIndex from '../views/ListsIndex.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import ListsShow from '../views/ListsShow.vue';
import Logout from '../views/Logout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/lists',
    name: 'lists-index',
    component: ListsIndex,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/lists/:id',
    name: 'lists-show',
    component: ListsShow,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
