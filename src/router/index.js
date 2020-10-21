import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Create from "@/views/Create.vue";
import Update from "@/views/Update.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/update/:id",
    name: "Update",
    component: Update
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
