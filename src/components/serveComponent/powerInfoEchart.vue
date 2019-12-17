<template>
    <div>
        <div id="powerInfoEchart" :style="style"></div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                style: {
                    "width": "3.9rem",
                    "height": "2.6rem"
                },
                dataList: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {
                            normal: {
                                // color: '#28CD9C' //改变区域颜色
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(247,160,80,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(247,160,80,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        lineStyle: {
                            color: '#28CD9C' //改变区域颜色
                        },
                        itemStyle: {
                            normal: {
                                color: "#28CD9C",
                            }
                        },
                        data: [0.1, 0.2, 0.3, 0.5, 0.6, 0.4, 0.5, 0.8, 0.4]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {
                            normal: {
                                // color: '#00ffff' //改变区域颜色
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(0,255,255,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(0,255,255,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        lineStyle: {
                            color: '#00ffff' //改变区域颜色
                        },
                        itemStyle: {
                            normal: {
                                color: "#00ffff",
                            }
                        },
                        data: [0.4, 0.3, 0.1, 0.4, 0.6, 0.4, 0.3, 0.3, 0.6]
                    },
                ]
            }
        },
        props: {
            name: {
                type: String,
                default: "直接访问"
            }
        },
        created() {
            
        },
        mounted() {
            //检测 图标自适应
            this.initChart()
        },
        watch: {
            form: {
                handler: function(val) {
                    this.initChart()
                },
                deep: true
            },
        },
        beforeDestroy() {},
        methods: {
            getMessage() { //
                this.$axios.post("/epAgent/dataModel/interface/3be2a99178ad14b5", {
                    "pageNum": 1,
                    "pageSize": 1,
                    "whereWord": {}
                }).then((res) => {
                    res.result.fieldInfos.map((item, index) => {})
                })
            },
            initChart() {
                //这句申明建议写到外面去
                this.powerInfoEchart = this.$echarts.init(document.getElementById("powerInfoEchart"))
                this.powerInfoEchart.setOption({
                    // backgroundColor: "#ccc",
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: ['.', '3', '6', '9', '12', '15', '18', '21', '24'],
                        splitLine: { //去除网格线
                            show: false
                        },
                        splitArea: {
                            show: false
                        }, //去除网格区域
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#00FFFF',
                                fontSize: "0.14rem"
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        splitLine: { //去除网格线
                            show: true,
                            color: {
                                normal: {
                                    color: "#00ffff",
                                }
                            }
                        },
                        splitArea: {
                            show: false
                        }, //去除网格区域
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#00FFFF',
                                fontSize: "0.14rem"
                            }
                        }
                    }],
                    series: this.dataList
                });
                // window.onresize = this.powerInfoEchart.resize // 加这行代码，没错！
                window.addEventListener("resize", ()=> {
                    this.powerInfoEchart.resize();
                });
            }
        }
    }
</script>

<style lang="less" scoped>

</style>


