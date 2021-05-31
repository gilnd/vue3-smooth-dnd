import { createRouter, createWebHistory } from "vue-router";

// Views Components
import Kanban from '/src/pages/Kanban.vue'
import NotFound from '/src/pages/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'kanban',
    component: Kanban,
  }, {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;