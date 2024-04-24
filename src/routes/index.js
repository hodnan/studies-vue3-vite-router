import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: () => import("../pages/Home.vue"), meta:{layout:"layout-default"} },
    { path: "/about", component: () => import("../pages/About.vue"), meta:{layout:"layout-guest"} },
    { path: "/products", component: () => import("../pages/Products.vue"), meta:{layout:"layout-default"} },
    { path: "/login", component: () => import("../pages/Login.vue"), meta:{layout:"layout-empty"} },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;