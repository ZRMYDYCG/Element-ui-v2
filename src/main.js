import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    console.log(process.env)
  }
}).$mount('#app')
