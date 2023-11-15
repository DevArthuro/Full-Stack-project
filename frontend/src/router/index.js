import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/ViewLogin.vue'
import Signup from '../views/ViewSignup.vue'
import Dashboard from '../views/ViewDashboard.vue'
import {authStore} from '../store/manageToken'

const routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/registrarme/',
        component: Signup,
        name: 'signup',
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/ingresar/',
        component: Login,
        name: 'login',
        meta: {
            requiredAuth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = authStore()
    if (to.meta.requiredAuth && !auth.isAuthenticated)
    {
        next({name: 'login'})
    }
    else
    {
        next()
    }
})





export default router;