<!--  -->
<template>
    <div style="background-color:#ddd;overflow:hidden">
        <!-- <video controls id="video1">
                            <source src="/static/mp4/1.mp4" type="video/mp4">
                </video> -->
        <el-form :model="form" label-width="80px" id="FORM" style="margin-top:0.15rem" action="/ApiUrl2/sas/api/login" method="post">
            <el-form-item label="用户名">
                <el-input v-model="form.username" name="username" style="width:1.2rem"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" name="password" style="width:1.2rem"></el-input>
            </el-form-item>
            <input type="submit" class="btn" value="登录">
        </el-form>
    </div>
</template>

<script>
    import $ from "../../../../static/jquery-1.12.4"
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
            // this.getAllRoom()
            console.log("this.$store.state",this.$store.getters.SET_USER_BASEINFO)
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            $('#FORM').on('submit', (e) => {
                e.preventDefault();
                 console.log("this.$util.checkPhone(this.form.username)",this.$util.paramStr('a'))
                    $.ajax({
                        type: "post",
                        url: "/ApiUrl2/sas/api/login",
                        data: {
                            username: this.form.username, //把表单填写值放这里传到后端
                            password: this.form.password //把表单填写值放这里传到后端
                        },
                        success: (data)=> {
                            if(data.success) {
                                console.log("返回值:", data.data);
                                sessionStorage.setItem("token",data.data.token)
                                console.log(sessionStorage.getItem("token"))
                                this.getAllRoom()
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
        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
    #video1 {
        width: 8rem; // height: 3rem;
        outline: none;
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