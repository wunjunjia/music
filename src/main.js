import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/index.scss';
import logo from '@/assets/logo.png';

Vue.use(VueLazyload, {
  loading: logo,
});

BScroll.use(Slide);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app');
