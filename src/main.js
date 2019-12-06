// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import store from './vuex/vuex.js' // 使用vuex
import Vue from 'vue'

import './common/css/base.css';
// import DD from './common/js/common.js';  //引入公共方法
// Vue.prototype.$DD = DD
import './common/js/rem.js';  //引入 rem 适应
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios' // 使用axios请求
import './utils/axios.js' //拦截器配置
import echarts from 'echarts' //使用ecahrts
Vue.prototype.$echarts = echarts
import * as filters from "./utils/filter"
// import { MessageBox } from 'element-ui';
import './icons';
// 使用utils
import Util from './utils/util'
Vue.prototype.$util = Util;

// 全局组件
import GlobalComponent from './common/js/globalComponents'
Vue.use(GlobalComponent);

Vue.use(ElementUI)


Vue.prototype.$axios = axios
Vue.config.productionTip = false;
if (process.env.NODE_ENV == 'development') {
  Vue.prototype.$isSdk = true
} else {
  Vue.prototype.$isSdk = true
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
//设置路由标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

//使用视频

// ### 对象的深拷贝
// this.menuFrom = Object.assign({}, res.data.result.sysFunction)

// 获取Android参数
// created(){
//   window.getAndroid = this.getAndroid;
// },
// methods:{
//   getAndroid(dataStr) {
//     this.id = dataStr.pageSize;
//   },
// }

// 公共请求模板
// this.$axios.post('url',{parmas}).then((resData) => {
//   cosole.log(resData)
// }).catch((error) => {
//   console.log(error)
// })

// 调用IOS方法传参              (方法名字)
// window.webkit.messageHandlers.Scan.postMessage(1);
// 调用安卓方法
// window.dzsb.back('H5message');

// 原生调用我的方法
// window.setOrderList = this.setOrderList

// vuex 储存数据方法
// this.$store.dispatch('minusPriceAsync', 30);

// Svg 图片
{
  /* <svg-icon icon-class="1"  className = "Svg" /> */
}
/* eslint-disable no-new */


// 路由传参
// this.$router.push({
//   name: 'TreatmentReimbursement',
//   params: {
//       id: 1
//   }
// })
// 子组件过去参数
// this.$route.params.id

// 判断终端
// var u = navigator.userAgent;
// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

// 调用公共方法 this.$DD.ApiUrl()

// 深度监听
// watch: {
//   value: {
//       handler: function(val) {
//          console.log("val---",val)
//       },
//       deep: true
//   },
// },

// ybwsbfw
console.log('----------------欢迎进入网报首页main.js--------------------')

// 1  网新恩普包  2  浙理办包
Vue.prototype.$build = "1"


router.beforeEach((to, from, next) => {
    next()
})

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
