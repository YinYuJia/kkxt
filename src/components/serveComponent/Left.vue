<!--  -->
<template>
    <div class="left">
        <div class="p"> <img class="img" src="../../assets/imgs/icon.png" alt=""> 电量信息分析 </div>
        <div class="p2"></div>
        <div class="p3">
            <p class="p3_1">昨日用电量</p>
            <p class="p3_2">{{powerInfoData.yestoday}}QW/H</p>
            <p class="p3_3">今日用电量</p>
            <p class="p3_4">{{powerInfoData.today}}QW/H</p>
        </div>
        <div class="p4">
            <span class="today"><img style="margin-right:.05rem" src="../../assets/imgs/today.png" alt="">今日用电量</span>
            <span class="yesterday"><img  style="margin-right:.05rem" src="../../assets/imgs/yesterday.png" alt="">昨日用电量</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            powerInfoData:{
                default:{},
                type:Object
            }
        },
        data() {
            return {
                yestoday:"",
                today:""
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
          console.log("父组件传值----",this.powerInfoData)
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {},
        methods: {

        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
    .left {
        width: 3.9rem;
        height: 3rem;
        position: relative;
        .p {
            font-size: .24rem;
            color: #28CD9C;
            .img {
                width: .16rem;
                height: .2rem;
            }
        }
        .p2 {
            width: 3.9rem;
            height: .08rem;
            background: url("../../assets/imgs/p2Img.png") no-repeat;
            background-size: 100% 100%;
        }
        .p3 {
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: .5rem;
            left: 50%;
            ;
            transform: translateX(-50%);
            background: url("../../assets/imgs/powerInfo.png") no-repeat;
            background-size: 100% 100%;
            .p3_1 {
                position: absolute;
                top: .47rem;
                left: 48%;
                transform: translateX(-50%);
                color: #00FFFF;
                font-size: .12rem;
            }
            .p3_2 {
                position: absolute;
                top: .62rem;
                left: 48%;
                transform: translateX(-50%);
                color: #00FFFF;
                font-size: .16rem;
            }
            .p3_3 {
                position: absolute;
                top: .95rem;
                left: 48%;
                transform: translateX(-50%);
                color: #28CD9C;
                font-size: .14rem;
            }
            .p3_4 {
                position: absolute;
                top: 1.11rem;
                left: 48%;
                transform: translateX(-50%);
                color: #28CD9C;
                font-size: .24rem;
            }
        }
        .p4 {
            position: absolute;
            bottom: .15rem;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            .today {
                color: #28CD9C;
                font-size: .14rem;
                float: left;
                width: 49.6%;
                text-align: center;
            }
            .yesterday {
                color: #4BFEFE;
                font-size: .14rem;
                float: left;
                width: 49.6%;
                text-align: center;
            }
        }
    }
</style>