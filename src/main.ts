import Vue from 'vue';
import vuetify from './plugins/vuetify';

import VueCodemirror from 'vue-codemirror';
// import base style
import 'codemirror/lib/codemirror.css';
Vue.use(VueCodemirror);

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

const app = new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');

(window as any).app = app;
