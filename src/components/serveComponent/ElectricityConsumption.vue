<!--  -->
<template>
    <div class="left">
        <div class="p"> <img class="img" src="../../assets/imgs/icon.png" alt=""> 开关用电量TOP5 </div>
        <div class="p2"></div>
        <div id="ElectricityConsumption" :style="style1"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                style1: {
                    "width": "3.9rem",
                    "height": "3rem"
                },
            }
        },
        watch: {
            form: {
                handler: function(val) {
                    console.log('监听---', val)
                    this.ElectricityConsumption()
                },
                deep: true
            },
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {},
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            this.ElectricityConsumption()
        },
        methods: {
            ElectricityConsumption() {
                //这句申明建议写到外面去
                this.ElectricityConsumptionChart = this.$echarts.init(document.getElementById("ElectricityConsumption"))
                this.ElectricityConsumptionChart.setOption({
                    color: ['#3398DB'],
                    tooltip: {
                        // show:false,
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '4%',
                        top: '8%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['one', 'two', 'three', 'four', 'five'],
                        splitLine: { //去除网格线
                            show: false
                        },
                        splitArea: {
                            show: false
                        }, //去除网格区域
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#00FFFF',
                                fontSize: "0.14rem"
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        splitLine: { //去除网格线
                            show: false
                        },
                        splitArea: {
                            show: false
                        }, //去除网格区域
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#00FFFF',
                                fontSize: "0.14rem"
                            }
                        }
                    }],
                    series: [{
                        name: '开关用电量TOP5',
                        type: 'bar',
                        barWidth: '60%',
                        data: [5, 4, 3, 2, 1],
                        itemStyle: { //柱样式
                            normal: {
                                color:"#82E2C6",
                                barBorderRadius: [2, 2, 0, 0],
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: "{b}",
                                    textStyle: {
                                        color: '#0EFCFF'
                                    }
                                },
                                opacity: 1,
                            }
                        }
                    }]
                });
                
                window.onresize = this.ElectricityConsumptionChart.resize // 加这行代码，没错！
                window.addEventListener("resize", ()=> {
                    this.ElectricityConsumptionChart.resize();
                });
            }
        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
    .left {
        width: 3.9rem;
        height: 3rem;
        position: relative; // background-color: red;
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
    }
</style>