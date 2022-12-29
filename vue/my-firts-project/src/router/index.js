import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Option from "../views/Option.vue";
import SFC from "../views/SFC.vue";

const routes = [
  {
    path: "/",
    redirect: "/animals",
  },
  {
    path: "/animals",
    name: "Home",
    component: Home,
  },
  {
    path: "/animals/option",
    name: "Option",
    component: Option,
  },
  {
    path: "/animals/sfc",
    name: "SFC",
    component: SFC,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
