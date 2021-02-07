import { createRouter, createWebHistory } from "vue-router";

// const Heroes = () => import(/* webpackChunkName: "Heroes" */ "../components/heroes/Heroes.vue");
// const Series = () => import(/* webpackChunkName: "Series" */ "../components/series/Series.vue");
// const Comics = () => import(/* webpackChunkName: "Comics" */ "../components/comics/Comics.vue");
const List = () => import(/* webpackChunkName: "List" */ "../components/list/List.vue");
const Details = () => import(/* webpackChunkName: "Details" */ "../components/details/Details.vue");


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: List },
    { path: "/heroes", component: List },
    { path: "/heroes/:id", component: Details },
    { path: "/series", component: List },
    { path: "/series/:id", component: Details },
    { path: "/comics", component: List },
    { path: "/comics/:id", component: Details },
  ]
});

export default router;
