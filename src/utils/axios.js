import axios from 'axios'
import Vue from "vue"
import { Loading } from 'element-ui';
// 创建实例
const service = axios.create({

});


var loadingInstance;
// axios拦截器
axios.interceptors.request.use(request => {

    loadingInstance = Loading.service({
        'background':"rgba(0,0,0,0)"
    });
    request.headers['Content-Type'] = 'application/json';
    let token = sessionStorage.getItem("token")
    if( token) {
        request.headers['AUTHORIZATION'] = token
    }
    request.baseURL = process.env.baseURL
    return request;

});



// 拦截响应
axios.interceptors.response.use((response) => {
    loadingInstance.close();
    // token 已过期，重定向到登录页面
    // if(newRes.code == -1 ){
    //     // 系统异常
    //     console.log(newRes.data.msg);
    //     // this.$router.push("/")
    //     // Vue.$router.push("/")
    //     // console.log()
    //     return;
    // }else if (newRes.code == 1 ) {
    //     // 业务异常
    //     if ( newRes.data.enCode !== 1000 ) {
    //         console.log(newRes.data.msg);
    //         // this.$router.push("/")
    //     }
    //     return;
    // }else if (newRes.code == 0 ) {
    //     // 成功   1000
    //     if (newRes.data.enCode !== 1000 ) {
    //     // 失败  1001
    //         console.log(newRes.data.msg);
    //         return;
    //     }
    // }
    return response.data
}, 
error => {
    return Promise.reject(error.message);   // 返回接口返回的错误信息
});

export default service;