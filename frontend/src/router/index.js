import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "register",
      component: () => import("../components/Register.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../components/Dashboard.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../components/dashboardnew.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../components/EditLinks.vue"),
    },
    {
      path: "/:custom",
      name: "shorten",
      component: () => import("../components/Shorten.vue"),
    },
  ],
});

export default router;
