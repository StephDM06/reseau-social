import { createRouter, createWebHistory } from "vue-router";
import FilActu from "../views/filActu.vue";

const routes = [
  {
    path: "/actualites",
    name: "fil-actus",
    component: FilActu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
