import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';


import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.filter('truncHash', function trunc(value, len){
    return !!value ? `${value.slice(0,len||8)}....${value.slice(-(len||8))}`: 'not data';
});
Vue.filter('tsp2iso', function tsp2iso(val) {             // конвертор timestamp => ISO
    let iso = (new Date(val*1000)).toISOString();
    return `${iso.slice(0,10)} ${iso.slice(11, 19)} GMT`;
});

new Vue({
  router,
  render: h => h(App)   //   (h) => {return h(App)}  эквивалентно  h => h(App)
}).$mount('#app');


