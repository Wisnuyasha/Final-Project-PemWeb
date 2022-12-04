import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../components/Register.vue";
import LoginView from "../components/Login.vue"
import DashboardView from "../components/Dashboard.vue"
import EditView from "../components/EditLinks.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView
    },
  ],
});

export default router;
