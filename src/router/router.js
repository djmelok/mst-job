import Vue from 'vue'
import Router from 'vue-router'

import NotFoundComponent from '../components/NotFoundComponent.vue'
import Main from '../components/_MainWrapper.vue'
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [{
            path: '*',
            component: NotFoundComponent
        }, {
            path: '/',
            name: 'main',
            component: Main,
            beforeEnter: (to, from, next) => {
                if (localStorage.login_status) {
                    next();
                } else {
                    next('/sign_in');
                }
            }
        },
        {
            path: '/sign_in',
            name: 'sign_in',
            component: SignIn,
            beforeEnter: (to, from, next) => {
                if (!localStorage.login_status) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/sign_up',
            name: 'sign_up',
            component: SignUp,
            beforeEnter: (to, from, next) => {
                if (!localStorage.login_status) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    ]
});

export default router;