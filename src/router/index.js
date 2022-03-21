import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/Authentication.vue";

const routes = [
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
