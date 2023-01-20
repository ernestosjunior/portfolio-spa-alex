import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contato",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
  ],
});

export default router;
