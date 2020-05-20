import Vue from 'vue';

import App from './App.vue';
import VueCodemirror from 'vue-codemirror';

Vue.config.productionTip = false;

// import base style
import 'codemirror/lib/codemirror.css';

import vuetify from './plugins/vuetify';
Vue.use(VueCodemirror);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
