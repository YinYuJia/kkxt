<!--  -->
<template>
  <div  class="login-box">
    <div class="login-container">
      <el-form :model="form" label-width="80px" id="FORM" style="margin-top:0.15rem" action="/ApiUrl2/sas/api/login" method="post" :rules="rules" status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" name="username" clearable placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passwoed">
        <el-input v-model="form.password" name="password" style="width:1.2rem" clearable placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm" class="btn">立即创建</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form>
    </div>
  </div>
  <!-- ------------------------------------------------------------------- -->
   <!-- <div class="login">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" status-icon>
      <img src="../assets/avatar.jpg" alt />
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入用户密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div> -->
</template>

<script>
  import $ from "../../static/jquery-1.12.4"
  export default {
    data() {
      return {
        form: {
          username: "",
          password: ""
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      // this.getAllRoom()
      console.log("this.$store.state", this.$store.getters.SET_USER_BASEINFO)

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      $('#FORM').on('submit', (e) => {
        e.preventDefault();
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
      })
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
      },
       submitForm() {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetForm() {
        this.$refs[formName].resetFields();
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
    .login-container {
      width: 5rem;
      height: 8rem;
      background-color: #fff;
      float: right;
      margin-top: .9rem;
      margin-right: .5rem;
      padding: .2rem;
    }
  }
  .btn {
    height: .5rem;
    width: 1.2rem;
    font-size: .16rem;
    background-color: red;
    color: #fff;
    border-radius: 5px;
  }
</style>
