import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllProjects from "../views/HomeViews/Projects/allProjects.vue";
import completeStack from "../views/HomeViews/Stack/completeStack.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/allProjects",
    name: "All Projects",
    component: AllProjects,
  },
  {
    path: "/completeStack",
    name: "Complete Stack",
    component: completeStack,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
