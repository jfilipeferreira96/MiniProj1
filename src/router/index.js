import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Who Am I - José Ferreira",
    },
  },
  {
    path: "/services",
    name: "services",
    component: HomeView,
    meta: {
      title: "What I do",
    },
  },
  {
    path: "/hoobies",
    name: "hoobies",
    component: HomeView,
    meta: {
      title: "Hobbies",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
