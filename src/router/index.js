
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import Home from '../views/Profile.vue'
import Login from '../views/Login.vue'

import insertchatopen from '../views/insert/insertChatopen.vue'
import insertchatpostive from '../views/insert/insertChatpositive.vue'
import insertchatnegative from '../views/insert/insertChatnegative.vue'
import insertchatstimulate from '../views/insert/insertChatstimulate.vue'
import insertchatclose from '../views/insert/insertChatclose.vue'
import insertassistance from '../views/insert/insertAssistance.vue'
import insertactivity from '../views/insert/insertActivity.vue'

import updatechatopen from '../views/update/_id/updateChatopen.vue'
import updatechatpositive from '../views/update/_id/updateChatpositive.vue'
import updatechatnegative from '../views/update/_id/updateChatnegative.vue'
import updatechatstimulate from '../views/update/_id/updateChatstimulate.vue'
import updatechatclose from '../views/update/_id/updateChatclose.vue'
import updateactivitye from '../views/update/_id/updateActivity.vue'
import updateassistance from '../views/update/_id/upateAssistance.vue'
import updateProfile from '../views/update/_id/updateProfile.vue'
//ในviews
import activity from '../views/activity.vue'
import assistance from '../views/assistance.vue'
import forgotpassword from '../views/forgotPassword.vue'
import replymessage from '../views/reply_message.vue'
import Register from '../views/Register.vue'
//Chat
import chatopen from '../views/chat/chatopen.vue'
import chatpositive from '../views/chat/chatpositive.vue'
import chatnegative from '../views/chat/chatnegative.vue'
import chatstimulate from '../views/chat/chatstimulate.vue'
import chatclose from '../views/chat/chatclose.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  /////////////////////// insert ////////////////////////
  {
    path: '/insertchatopen',
    name: 'insertchatopen',
    component: insertchatopen
  },
  {
    path: '/insertchatpositive',
    name: 'insertchatpositive',
    component: insertchatpostive
  },
  {
    path: '/insertchatnegative',
    name: 'insertchatnegative',
    component: insertchatnegative
  },
  {
    path: '/insertchatstimulate',
    name: 'insertchatstimulate',
    component: insertchatstimulate
  },
  {
    path: '/insertchatclose',
    name: 'insertchatclose',
    component: insertchatclose
  },
  {
    path: '/insertassistance',
    name: 'insertassistance',
    component: insertassistance
  },
  {
    path: '/insertactivity',
    name: 'insertactivity',
    component: insertactivity
  },

  /////////////////////// update /////////////////////////////
  {
    path: '/updatechatopen/:id/:Text',
    name: 'updatechatopen',
    component: updatechatopen
  },
  {
    path: '/updatechatpositive/:id/:Text',
    name: 'updatechatpositive',
    component: updatechatpositive
  },
  {
    path: '/updatechatnegative/:id/:Text',
    name: 'updatechatnegative',
    component: updatechatnegative
  },
  {
    path: '/updatechatstimulate/:id/:Text',
    name: 'updatechatstimulate',
    component: updatechatstimulate
  },
  {
    path: '/updatechatclose/:id/:Text',
    name: 'updatechatclose',
    component: updatechatclose
  },
  {
    path: '/updateActivity/:id/:name/:description/:website',
    name: 'updateactivitye',
    component: updateactivitye
  },
  // {
  //   path: '/pagination',
  //   name: 'pagination',
  //   component: pagination
  // },
  {
    path: '/updateAssistance/:id/:name/:tel/:description',
    name: 'updateassistance',
    component: updateassistance
  },
  {
    path: '/updateProfile',
    name: 'updateProfile',
    component: updateProfile
  },



  /////////////  VIEWS   ///////////

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/replymessage',
    name: 'reply_message',
    component: replymessage
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/assistance',
    name: 'assistance',
    component: assistance
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: forgotpassword
  },

    /////////////  CHAT   ///////////
    {
      path: '/chatopen',
      name: 'chatopen',
      component: chatopen
    },
    {
      path: '/chatpositive',
      name: 'chatpositive',
      component: chatpositive
    },
    {
      path: '/chatnegative',
      name: 'chatnegative',
      component: chatnegative
    },
    {
      path: '/chatstimulate',
      name: 'chatstimulate',
      component: chatstimulate
    },
    {
      path: '/chatclose',
      name: 'chatclose',
      component: chatclose
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
