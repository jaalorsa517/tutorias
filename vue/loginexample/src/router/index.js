import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/Entry.vue"),
    meta: {
      requiredAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiredAuth)) {
    if (from.params.user === "fulano" && from.params.pass === "123") {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
