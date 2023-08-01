import { createRouter, createWebHistory } from "vue-router";

import Products from "../components/ProductItem.vue";
import InfoItem from "../components/InfoItem.vue";
import Some from "../components/SomeComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Products,
    children: [
      {
        path: "page:id",
        name: "page",
        component: Products,
      },
    ],
  },
  {
    path: "/product/:id",
    name: "some",
    component: InfoItem,
    // children: [
    //   {
    //     path: ":id",
    //     name: "infoitem",
    //     component: Some,
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
