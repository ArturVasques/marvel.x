import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import(/* webpackChunkName: "HomePage" */ "../components/homepage/Homepage.vue");
const Heroes = () => import(/* webpackChunkName: "Heroes" */ "../components/heroes/Heroes.vue");
const Series = () => import(/* webpackChunkName: "Series" */ "../components/series/Series.vue");
const Comics = () => import(/* webpackChunkName: "Comics" */ "../components/comics/Comics.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/heroes", component: Heroes },
    { path: "/series", component: Series },
    { path: "/comics", component: Comics }
  ]
});

export default router;
