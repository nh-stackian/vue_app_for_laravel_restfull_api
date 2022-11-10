import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AddUserView from '../views/users/AddUserView.vue'
import CreateUsersView from '../views/users/CreateUsersView.vue'
import UsersView from '../views/users/UsersView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/add',
      name: 'add',
      component: ()=>import('../views/users/AddUserView.vue')
    },
    {
      path: '/create_users',
      name: 'create_users',
      component: CreateUsersView
    },
    
  ]
})

export default router
