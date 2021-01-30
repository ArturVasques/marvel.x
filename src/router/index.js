import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import(/* webpackChunkName: "HomePage" */ "../components/homepage/Homepage.vue");
const Heroes = () => import(/* webpackChunkName: "Heroes" */ "../components/heroes/Heroes.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/heroes", component: Heroes }
  ]
});

export default router;
