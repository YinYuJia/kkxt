<!--  -->
<template>
    <div class="left">
         <div class="p"> <img class="img" src="../../assets/imgs/icon.png" alt=""> 电量信息分析 </div>
         <div class="p2"></div>
         <DashboardEchart class="DashboardEchart" :obj="{
             'id':'DashboardEchart1',
             'name':'电压异常',
             'data':'70',
             'color':{
                 'start':'#00ffff',
                  'end':'#0052ff'
             }
         }"></DashboardEchart>

         <DashboardEchart class="DashboardEchart" :obj="{
             'id':'DashboardEchart2',
             'name':'电流异常',
             'data':'40',
             'color':{
                 'start':'#00ffff',
                  'end':'#6ABD87'
             }
         }"></DashboardEchart>

         <DashboardEchart class="DashboardEchart" :obj="{
             'id':'DashboardEchart3',
             'name':'功率异常',
             'data':'48',
             'color':{
                 'start':'#00ffff',
                  'end':'#C2AC3E'
             }
         }"></DashboardEchart>

         <DashboardEchart class="DashboardEchart" :obj="{
             'id':'DashboardEchart4',
             'name':'温度异常',
             'data':'26',
             'color':{
                 'start':'#00ffff',
                  'end':'#D95373'
             }
         }"></DashboardEchart>
         
         <!-- <DashboardEchart></DashboardEchart>
         <DashboardEchart></DashboardEchart>
         <DashboardEchart></DashboardEchart> -->
    </div>
</template>

<script>
import DashboardEchart from "./DashboardEchart"
    export default {
        components:{
            DashboardEchart,
        },
        data() {
            return {
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            
        },
        methods: {
        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
    .left {
        width: 3.9rem;
        height: 4rem;
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
             background: url("../../assets/imgs/p2Img.png") no-repeat ;
            background-size: 100% 100%;
        }
        .DashboardEchart {
            float: left;
        }
    }
</style>