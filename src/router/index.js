import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/components/Authentication.vue";
import authent from "@/views/connexion.vue";

const routes = [
  {
    path: "/connexion",
    name: "connexion",
    component: authent,
  },

  {
    path: "/login",
    name: "login",
    component: Authentication,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
