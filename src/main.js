import Vue from 'vue'
import store from '@/store/store'
import router from '@/router'
import App from '@/App.vue'
import 'normalize.css'
import '@/plugins'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
