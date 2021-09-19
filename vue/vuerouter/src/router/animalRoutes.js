import gallina from "@/views/gallina.vue";
import ave from "@/views/ave.vue";

export default [
  {
    path: "/pajaros",
    redirect: "/ave",
  },
  {
    path: "/ave",
    components: {
      default: ave,
      gallina,
    },
  },
  {
    path: "/felinos",
    component: () => import("@/views/felinos.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/gatos.vue"),
      },
      {
        path: "/felinos/leon/",
        name: "leon",
        props: true,
        component: () => import("@/views/leon.vue"),
      },
    ],
  },
  {
    path: "/caninos",
    alias: "/canes",
    component: () => import("@/views/caninos.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/perro.vue"),
        meta: { role: ["super", "coord", "admin"] },
        beforeEnter: (to, from, next) => {
          //to para donde va
          //from de donde viene
          //next function que redirige
          const auth = localStorage.getItem("user");
          if (to.meta.role.includes(auth)) {
            next();
            return;
          }
          next({ name: "leon" });
        },
        beforeUpdate: () => {},
        beforeLeave: () => {},
      },
      {
        path: "/caninos/zorro",
        name: "zorro",
        component: () => import("@/views/zorro.vue"),
      },
    ],
  },
];
