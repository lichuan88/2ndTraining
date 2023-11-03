import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "back",
        component: () => import("../views/backstage.vue"),
      },
      {
        path: "/admin",
        children: [
          {
            path: ":id",
            name: "admindetail",
            component: () => import("../views/admindetail.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
