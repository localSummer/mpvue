import Vue from 'vue'
import App from './App'
import store from './store'

let Fly = require('flyio/dist/npm/wx')
let fly = new Fly()

Vue.config.productionTip = false
App.mpType = 'app'

// 配置请求基地址
fly.config.baseURL = '/wechat'

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  console.log(request)
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (err) => {
    return Promise.reject(err)
  }
)

Vue.prototype.$store = store // 将store挂载在Vue的原型上
Vue.prototype.$http = fly // 将fly实例挂在vue原型上

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/search/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ddd',
      navigationBarTitleText: '实训大数据',
      navigationBarTextStyle: 'black'
    }
  }
}
