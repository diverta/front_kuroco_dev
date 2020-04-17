import Vue from 'vue';
import VJsoneditor from 'v-jsoneditor';

import App from './App.vue';
import VueCodemirror from 'vue-codemirror';

Vue.config.productionTip = false;

// import base style
import 'codemirror/lib/codemirror.css';
Vue.use(VueCodemirror);
Vue.use(VJsoneditor);

new Vue({
  render: h => h(App),
}).$mount('#app');
