// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueParticles from "vue-particles";
import BaiduMap from 'vue-baidu-map';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.use(BaiduMap,{ak:'lDGs0QuxF27mFi34VnIKaKgj7Th LhOs5'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
