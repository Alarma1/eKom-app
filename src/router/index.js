import {createRouter, createWebHistory} from 'vue-router'
import AuthorizationPage from "../views/AuthorizationPage.vue";
import AnalyticsPage from "../views/AnalyticsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'authorization', component: AuthorizationPage},
        {path: '/analytics', name: 'analytics', component: AnalyticsPage},
    ]
})

export default router
