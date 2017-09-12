import Vue from 'vue';
import VueWebsocket from 'vue-websocket';

import App from './App';
import router from './router';
import * as settings from '../../../settings';

Vue.config.productionTip = false;

Vue.use(VueWebsocket, settings.URL_SOCKET);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
