import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)   //   (h) => {return h(App)}  эквивалентно  h => h(App)
}).$mount('#app')
