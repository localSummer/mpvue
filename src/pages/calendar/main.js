/**
 * Created by wxw on 18-7-18.
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '日期'
  }
}
