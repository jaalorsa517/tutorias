import Vue from "vue";
import VueRouter from "vue-router";
import animalRoutes from "./animalRoutes";
import carsRoutes from "./carsRoutes";

Vue.use(VueRouter);

const routes = [...carsRoutes, ...animalRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {});
// router.afterEach((to, from, next) => {});

export default router;
