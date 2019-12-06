import Vue from 'vue'  //引入vue
import Vuex from 'vuex'  // 引入vuex
Vue.use(Vuex)   // 注册vuex
export default new Vuex.Store({  // 暴露与new vuex
    state:{ 
        // 用户基本信息
        SET_USER_BASEINFO:{
          name: '1111111111', //姓名
          idNo: '2222222222', //身份证号
        },
      },
      // 计算属性 getters
      getters:{
        SET_USER_BASEINFO:( state ) => {
          return state.SET_USER_BASEINFO.name;
        }, 
        
      },
      // 相当于methods
      mutations:{
        SET_USER_BASEINFO(state,payload){
          state.SET_USER_BASEINFO = payload;
        },
      },
      actions:{ //添加actions
        SET_USER_BASEINFO( context, payload ) {
          context.commit( 'SET_USER_BASEINFO', payload ); //context提交
        },
      }
})  