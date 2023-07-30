import { createRouter, createWebHistory } from "vue-router";
import ProductsList from "../pages/ProductsList.vue";

const routes = [
  {
    path: "/",
    component: ProductsList,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
