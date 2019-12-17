<!--  -->
<template>
  <div  class="login-box">
    <div class="login-left">
    </div>
    <div class="login-container">
      <div class="login-header">
        <p>用户登录</p>
      </div>
      <el-form :model="form" label-width="80px" id="FORM" style="margin-top:0.15rem" action="/ApiUrl2/sas/api/login" method="post">
      <el-form-item label="用户名" prop="username" hide-required-asterisk>
        <el-input v-model="form.username" value="test" name="username" clearable placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passwoed">
        <el-input v-model="form.password" value="1" name="password" clearable placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button type="submit" class="btn">立即登录</el-button>
    </el-form>
    </div>
    <div class="mast"></div>
  </div>
</template>

<script>
  import $ from "../../static/jquery-1.12.4"
  export default {
    data() {
      return {
        form: {
          username: "olgg",
          password: "12qwE3!!"
        }
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      // this.getAllRoom()
      console.log("this.$store.state", this.$store.getters.SET_USER_BASEINFO)
                   $.ajax({
          type: "post",
          url: "/ApiUrl2/sas/api/login",
          data: {
            username: this.form.username, //把表单填写值放这里传到后端
            password: this.form.password //把表单填写值放这里传到后端
          },
          success: (data) => {
            if (data.success) {
              console.log("返回值:", data.data);
              sessionStorage.setItem("token", data.data.token)
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              this.$router.push({
                name: 'index',
                params: {}
              })
            }
          }
        });
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      // $('#FORM').submit(function(e) {
      //      e.preventDefault();
      //              $.ajax({
      //     type: "post",
      //     url: "/ApiUrl2/sas/api/login",
      //     data: {
      //       username: this.form.username, //把表单填写值放这里传到后端
      //       password: this.form.password //把表单填写值放这里传到后端
      //     },
      //     success: (data) => {
      //       if (data.success) {
      //         console.log("返回值:", data.data);
      //         sessionStorage.setItem("token", data.data.token)
      //         this.$message({
      //           message: '登录成功',
      //           type: 'success'
      //         });
      //         this.$router.push({
      //           name: 'index',
      //           params: {}
      //         })
      //       }
      //     }
      //   });
      // })
      // 手动提交
      // $('#FORM').on('submit', (e) => {
      //   e.preventDefault();
      //   console.log(11111)
      //   $.ajax({
      //     type: "post",
      //     url: "/ApiUrl2/sas/api/login",
      //     data: {
      //       username: this.form.username, //把表单填写值放这里传到后端
      //       password: this.form.password //把表单填写值放这里传到后端
      //     },
      //     success: (data) => {
      //       if (data.success) {
      //         console.log("返回值:", data.data);
      //         sessionStorage.setItem("token", data.data.token)
      //         this.$message({
      //           message: '登录成功',
      //           type: 'success'
      //         });
      //         this.$router.push({
      //           name: 'index',
      //           params: {}
      //         })
      //       }
      //     }
      //   });
      // })
    },
    methods: {
      //登录
      play() {
        let video1 = document.getElementById("video1");
        video1.play()
      },
      //获取房间
      getAllRoom() {
        this.$axios.get('/ApiUrl2/sas/api/asset/switch-boxes').then((resData) => {
          console.log(resData)
        }).catch((error) => {
          console.log(error)
        })
      }
  }
}
</script>
<style lang='less' scoped>
  /* @import url(); 引入css类 */
  #video1 {
    width: 8rem; // height: 3rem;
    outline: none;
  }
  // element {
  //   margin-top: 0 !important;
  // }
  .mast {
    height: 10.8rem;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  html,body {
    padding: 0;
    margin-top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login-box {
    width: 100%;
    height: 100%;
    background: url('../assets/imgs/bgImg.png') no-repeat;
    background-size: 100% 100%;
    min-height:100vh;
    overflow: hidden;
    position: relative;
    .login-left {
      width: 12.62rem;
      height:9.44rem;
      background: url('../assets/imgs/login_center.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 0px;
      top: 0px;
    }
    .login-container {
      width: 5rem;
      height: 8rem;
      // background-color: #fff;
      float: right;
      margin-top: .9rem;
      margin-right: .5rem;
      padding-right: .45rem;
      padding-top: .32rem;
      padding-left: .32rem;
      box-sizing: border-box;
      background: url('../assets/imgs/login_form.png') no-repeat;
      .login-header {
        width: 100%;
        height: .68rem;
        padding-top: 15px;
        margin-bottom: .45rem;
        p {
          display: block;
          text-align: center;
          margin: 0 auto;
          font-size: .25rem;
          color: #fff;
          width: 1.6rem;
          height: .53rem;
          border-bottom: .01rem solid #1890ff;
          padding-top: .1rem;
          box-sizing: border-box;
        }
      }
    }
  }
  .btn {
    border: none;
    height: .5rem;
    width: 3.3927rem;
    font-size: .16rem;
    background-color: #1890ff;
    color: #fff;
    border-radius: 5px;
    float: right;
    margin-right: .02rem;
  }
  /deep/ .el-form-item__label {
        font-size: .2rem;
        color: #fff;
      }
  /deep/ .el-form-item {
    margin-bottom: .5rem;
  }
</style>
