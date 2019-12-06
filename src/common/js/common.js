import addressList from './address'
import zjAddress from './zjAddress'
import tzAddress from './tzAddress'
import sessionList from './sessionList'
import axios from 'axios'
export default {
    // 登录方法
    login:function(a){
        
    },
    // 公用请求地址

    ApiUrl:function() {
        if(process.env.NODE_ENV == 'development') {
          return 'http://223.4.69.214:8000/api'  //开发库
          // return 'http://223.4.69.118:8000/api/api'  //测1试库
          // return 'http://192.168.1.189:13030' //吴学文
          // return 'http://ybj.zjzwfw.gov.cn/api'//正式库地址

        }else{
          return ''
        }
    },

    // 公共请求参数封装 nativemsg 原生公共报文头 data 我们要穿的参数  tradeCode 交易号码
    commonRequsetData(data , tradeCode) {
          let commonData = {
            tradeCode:tradeCode,
            data:data,
          }
        return commonData
    },
    // 获取统筹区
    getOverallPlanningAreaList() {
      console.log('this',this.ApiUrl())
      // return
      axios.post(this.ApiUrl()+"/H5/jy9099/distanceHospital").then(resdata=>{
              console.log("获取统筹区",resdata.data)
        })
    },
    setTitle(title){
        dd.ready({
          developer: 'daip@dtdream.com',
          usage: [
            'dd.biz.navigation.setTitle',
          ],
          remark: '描述业务场景'
        }, function() {
          dd.biz.navigation.setTitle({
            title: title,
            onSuccess: function(data) {
            },
            onFail: function(error) {}
        })
        })
    },
    // 存session
    setSession(name,obj){
      sessionStorage.setItem(name,JSON.stringify(obj));
    },
    // 取session
    getSession(name){
      return JSON.parse(sessionStorage.getItem(name));
    },
    removeSession(name){
      for(let item of sessionList){
        if(item.indexOf(name)>-1){
          sessionStorage.removeItem(item);
        }
      }
    },
    addressList: function(){
      return addressList;
    },
    zjAddress: function(){
      return zjAddress;
    },
    tzAddress: function(){
      return tzAddress;
    }
}
