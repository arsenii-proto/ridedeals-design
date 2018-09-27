import Vue from "vue";
import Router from "vue-router";

import WebWrapper from "./WebWrapper.vue";

import Login from "./views/Login.vue";
import NotAllowed from "./views/NotAllowed.vue";
import ClientDashboard from "./views/ClientDashboard.vue";

Vue.use(Router);

const routes = [
  {
    path: "/current",
    name: "current",
    component: ClientDashboard
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/not-allowed",
    name: "not-allowed",
    component: NotAllowed
  },
  {
    path: "/client-dashboard",
    name: "client-dashboard",
    component: ClientDashboard
  }
];

export default new Router({

  mode: 'history',

  routes: ((a) => {

    a.push({
      path: '/web',
      name: 'web-components',
      component: WebWrapper,
      children: Array.from(routes).map(it => Object.assign({}, it, {
        path: it.path.replace('/', ''),
        name: it.path +'-component'
      }))
    })

    return a

  })(Array.from(routes))

});
