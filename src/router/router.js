import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/_MainWrapper.vue'
import SignUp from "../components/SignUp.vue";

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/sign_up',
            name: 'sign_up',
            component: SignUp
        }
    ]
});

export default router;