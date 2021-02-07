import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import(/* webpackChunkName: "HomePage" */ "../components/homepage/Homepage.vue");
const Heroes = () => import(/* webpackChunkName: "Heroes" */ "../components/heroes/Heroes.vue");
const Heroe = () => import(/* webpackChunkName: "Heroes" */ "../components/heroes/Heroe.vue");
const Series = () => import(/* webpackChunkName: "Series" */ "../components/series/Series.vue");
const Serie = () => import(/* webpackChunkName: "Series" */ "../components/series/Serie.vue");
const Comics = () => import(/* webpackChunkName: "Comics" */ "../components/comics/Comics.vue");
const Comic = () => import(/* webpackChunkName: "Comics" */ "../components/comics/Comic.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/heroes", component: Heroes },
    { path: "/heroes/:id", component: Heroe },
    { path: "/heroes/:name", component: Heroe },
    { path: "/series", component: Series },
    { path: "/series/:id", component: Serie },
    { path: "/comics", component: Comics },
    { path: "/comics/:id", component: Comic }
  ]
});

export default router;
