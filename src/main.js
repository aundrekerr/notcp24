import Vue from 'vue';
import VueTimeago from 'vue-timeago';
import App from './App.vue';

import './assets/styles/index.css';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'en',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');


window.addEventListener('load', () => {
  function handleNetworkChange() {
    if (navigator.onLine) {
      document.body.classList.remove('offline');
    } else {
      document.body.classList.add('offline');
    }
  }
  window.addEventListener('online', handleNetworkChange);
  window.addEventListener('offline', handleNetworkChange);
});
