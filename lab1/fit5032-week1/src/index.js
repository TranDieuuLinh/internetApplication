import { createRouter, createWebHistory } from "vue-router";
import MyName from './components/MyName.vue'


const routes = [
    { path: '/my-profile', component: MyName },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

