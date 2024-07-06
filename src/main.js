import Vue from 'vue'
import App from './App.vue'
import 'normalize.css' // 导入 normalize.css 包, 统一项目样式风格

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    console.log(process.env)
  }
}).$mount('#app')
