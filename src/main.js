// 对es6API的转义  必须放在最前面
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// router  的实例
import router from './router'
// 解决移动端点击的300ms的延迟
import  fastclick from 'fastclick'
// 懒加载
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
