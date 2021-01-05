import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import fastclick from 'fastclick'
import './assets/css/base.scss'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/images/small_close_163@3x.png'),
  loading: require('./assets/images/play_163@3x.png'),
  attempt: 2
})
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
