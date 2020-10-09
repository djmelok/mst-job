import Vue from 'vue'
import Router from 'vue-router'
import vNotFoundComponent from '../views/v-not-found-component.vue'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [{
        path: '*',
        name: 'v-not-found-component',
        component: vNotFoundComponent
    }, {
        path: '/',
        name: 'v-about-complex',
        meta: {
            layout: 'v-main-layout'
        },
        component: () => import('../views/v-about-complex.vue'),
    }, {
        path: '/features',
        name: 'v-features',
        meta: {
            layout: 'v-main-layout'
        },
        component: () => import('../views/v-features.vue'),
    }, {
        path: '/penthouses',
        name: 'v-penthouses',
        meta: {
            layout: 'v-main-layout'
        },
        component: () => import('../views/v-penthouses.vue'),
    }, {
        path: '/choose-apartment',
        name: 'v-choose-apartment',
        meta: {
            layout: 'v-main-layout'
        },
        component: () => import('../views/v-choose-apartment.vue'),
    }]
});

export default router;