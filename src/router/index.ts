import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Office from '@/views/Office.vue'; // @ is an alias to /src

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        // This uses the Office view as the Home view
        path: '/',
        name: 'Home',
        component: Office,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
