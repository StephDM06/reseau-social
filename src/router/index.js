import { createRouter, createWebHistory } from "vue-router";

import DataPost from "../views/filActu.vue";
import ProfilDonnees from "../views/Profil.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "filActu",
    component: DataPost,
  },
  {
    path: "/profil",
    name: "Profil",
    component: ProfilDonnees,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
