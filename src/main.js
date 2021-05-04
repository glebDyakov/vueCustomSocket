import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

//http://metinseylan.com:1992

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'ws://skade.cc:38080',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   }
// }))



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
