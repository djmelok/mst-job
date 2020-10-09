import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './vuex/store.js'
import router from './router/router.js'
import '@/styles/main.scss';

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')