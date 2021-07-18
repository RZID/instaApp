import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LogHome from "../views/logged_in/Home.vue";
import User from "../views/logged_in/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: LogHome,
    meta: {
      for: "log",
    },
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
    meta: {
      for: "log",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      for: "unlog",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Home,
    meta: {
      for: "unlog",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Home,
    meta: {
      for: "unlog",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  switch (to.meta.for) {
    case "unlog":
      return localStorage.getItem("token") ? next("/") : next();
    case "log":
      return !localStorage.getItem("token") ? next("/home") : next();
    default:
      return next();
  }
});

export default router;
