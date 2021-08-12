import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

// 引入全局css
import './assets/css/index.css'

// 引入中国地图js
import './assets/js/china'

//兄弟组件通信
export const evenBus = new Vue()


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
