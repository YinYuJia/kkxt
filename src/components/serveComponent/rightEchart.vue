<!--  -->
<template>
    <div class="left">
        <div class="p"> <img class="img" src="../../assets/imgs/icon.png" alt=""> 告警信息分析 </div>
        <div class="p2"></div>
        <DashboardEchart class="DashboardEchart" :obj="dianyaObj"></DashboardEchart>
        <DashboardEchart class="DashboardEchart" :obj="dianliuObj"></DashboardEchart>
        <DashboardEchart class="DashboardEchart" :obj="gonglvObj"></DashboardEchart>
        <DashboardEchart class="DashboardEchart" :obj="wenduObj"></DashboardEchart>
        <!-- <DashboardEchart></DashboardEchart>
             <DashboardEchart></DashboardEchart>
             <DashboardEchart></DashboardEchart> -->
    </div>
</template>

<script>
    import DashboardEchart from "./DashboardEchart"
    export default {
        components: {
            DashboardEchart,
        },
        data() {
            return {
                wenduObj:{
                 'id':'DashboardEchart4',
                 'name':'温度异常',
                 data:0,
                 'color':{
                     'start':'#00ffff',
                      'end':'#D95373'
                 }
             },
             dianyaObj:{
                 'id':'DashboardEchart1',
                 'name':'电压异常',
                 data:0,
                 'color':{
                     'start':'#00ffff',
                      'end':'#0052ff'
                 }
             },
             dianliuObj:{
                 'id':'DashboardEchart2',
                 'name':'电流异常',
                 data:0,
                 'color':{
                     'start':'#00ffff',
                      'end':'#6ABD87'
                 }
             },
             gonglvObj:{
                 'id':'DashboardEchart3',
                 'name':'功率异常',
                 data:0,
                 'color':{
                     'start':'#00ffff',
                      'end':'#C2AC3E'
                 }
             }
             
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
            this.getElectricity()
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
        },
        methods: {
            getElectricity() {
                let parmas = {
                    "id": 6
                }
                
                let data = this.$util.ParameterMatching("/ApiUrl2/sas/api/switch-box/" + parmas.id + "/switches", parmas)
                this.$axios.get(data).then((resData) => {
                    console.log("设备状态返回信息---", resData)
                    let newArr = []
                    resData.map((item, index) => {
                        item.state.status.map((item1,index1)=>{
                            newArr.push(item1)
                        })
                    })
                    console.log("newArr",newArr)
                    newArr.map((item,index)=>{
                        if( item.code == "ALARM_TEMPERATURE" ) {
                            this.wenduObj.data++  //温度报警
                        }else if( item.code == "ALARM_UNDER_VOLTAGE" || item.code == "WARNING_OVER_VOLTAGE") {
                            this.dianyaObj.data++  // 电压报警  过压 欠压
                        }else if( item.code == "WARNING_CURRENT") {
                            this.dianliuObj.data++  // 电流
                        }else if ( item.code == "ALARM_OVER_LOAD") {
                            this.gonglvObj.data++  // 功率报警
                        }
                    })
                }).catch((error) => {
                    console.log(error)
                })
            }
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
            background: url("../../assets/imgs/p2Img.png") no-repeat;
            background-size: 100% 100%;
        }
        .DashboardEchart {
            float: left;
        }
    }
</style>