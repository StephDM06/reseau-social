import { createRouter, createWebHistory } from "vue-router";

import authent from "@/views/connexion.vue";

const routes = [
  {
    path: "/connexion",
    name: "connexion",
    component: authent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
