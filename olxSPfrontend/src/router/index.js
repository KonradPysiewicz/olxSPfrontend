import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AddPost from '../views/AddPost.vue'
import MyOffers from "../views/MyOffers.vue";
import EditPost from "../views/EditPost.vue";
import ShowPost from "../views/ShowPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        reload: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/add_post',
      name: 'add_post',
      component: AddPost
    },
    {
      path: '/edit_post',
      name: 'edit_post',
      component: EditPost,
    },
    {
      path: '/my_offers',
      name: 'my_offers',
      component: MyOffers
    },
    {
      path: '/show_post',
      name: 'show_post',
      component: ShowPost
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
