import Vue from "vue";
import VueRouter from "vue-router";

import userResolver from "@/resolvers/user.resolver";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home/Home.vue"),
    redirect: { name: "Users" },
    children: [
      {
        path: "/users",
        name: "Users",
        component: () => import("../pages/Home/pages/Users/Users.vue"),
        beforeEnter: userResolver.users,
      },
      {
        path: "/limits",
        name: "Limits",
        component: () => import("../pages/Home/pages/Limits/Limits.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
