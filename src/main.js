import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

Vue.filter('strUpperCase', (val) => {
  return val.toUpperCase();
});
// Vue.filter('reverse', (val) => {
//   return val.split('').reverse().join('');
// });
new Vue({
  render: (h) => h(App),
}).$mount('#app');
