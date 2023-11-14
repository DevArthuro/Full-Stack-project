import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/ViewLogin.vue'
import Signup from '../views/ViewSignup.vue'
import Dashboard from '../views/ViewDashboard.vue'

const routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboard'
    },
    {
        path: '/registrarme/',
        component: Signup,
        name: 'signup'
    },
    {
        path: '/ingresar/',
        component: Login,
        name: 'login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router;