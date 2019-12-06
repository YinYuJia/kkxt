<!--  -->
<template>
    <div class="bangonglou">
        <div class="bangonglou_header">
            <p class="bangonglou_header_title">
                <img class="bangonglou_header_title_bg" src="../../assets/imgs/bangonglou.png" alt=""> <span class="bangonglou_header_title_span">办公楼</span>
            </p>
            <div class="bangonglou_header_div">
                <p class="bangonglou_header_div_p" @click="global">
                    <img src="../../assets/imgs/global.png" alt="">
                    <span>全局</span>
                </p>
                <ul class="ul">
                    <li v-for="item in obgList" :key="item.id" @click="floolClick(item.id)" :class="{li:true,bgImg:item.id == 3}">{{Number(item.id)}}F</li>
                </ul>
            </div>
        </div>
        <div class="bangonglou_contaner" v-if="isBangonglou_contaner">
        </div>
        <div class="bangonglou_contaner2" v-if="!isBangonglou_contaner">
            <div class="bangonglou_contaner2_left">
                <ul>
                    <li :class="{bangonglou_contaner2_right_li:true,bangonglou_contaner2_right_li_bg:item == 5 || item == 7}" v-for="item in 12"  :key="item.index">
                        <div class="bangonglou_contaner2_right_li_lv">
                            <img src="../../assets/imgs/lv.png" alt="">
                        </div>
                        <div class="bangonglou_contaner2_right_li_hong">
                            <img src="../../assets/imgs/hong.png" alt="">
                        </div>
                        <div class="bangonglou_contaner2_right_li_title">101车队</div>
                    </li>
                </ul>
            </div>
            <div class="bangonglou_contaner2_right">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isBangonglou_contaner: true,
                total: 10,
                obgList: [{
                        id: 1
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3
                    },
                    {
                        id: 4
                    },
                    {
                        id: 5
                    },
                ]
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {},
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {},
        methods: {
            global() {
                console.log("点击全局")
                this.isBangonglou_contaner = true
            },
            floolClick(data) {
                this.isBangonglou_contaner = false
                console.log("data---", data)
            }
        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
    .bangonglou {
        width: 7.43rem;
        height: 9.49rem; //   background: url("../assets/imgs/bgImg.png") no-repeat;
        background-size: 100% 100%; // border: 1px solid red;
        .bangonglou_header {
            height: 1.78rem;
            width: 100%;
            background: url("../../assets/imgs/gbbgl_header.png") no-repeat;
            background-size: 100% 100%;
            padding-left: .45rem;
            .bangonglou_header_title {
                line-height: .65rem;
                height: .65rem;
                width: 100%;
                position: relative;
                font-size: .18rem;
                color: #00FFFF;
                .bangonglou_header_title_bg {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .bangonglou_header_title_span {
                    position: absolute;
                    top: 50%;
                    left: .7rem;
                    transform: translateY(-50%);
                }
            }
            .bangonglou_header_div {
                height: 1rem;
                position: relative;
                .bangonglou_header_div_p {
                    cursor: pointer;
                    text-align: center;
                    margin-right: .5rem;
                    width: .6rem;
                    height: 100%;
                    font-size: .24rem;
                    color: #28CD9C;
                    img {
                        height: .46rem;
                        width: .46rem;
                    }
                }
                .ul {
                    position: absolute;
                    top: 0;
                    left: 1.20rem;
                    ;
                    .li {
                        float: left;
                        height: 1rem;
                        width: 1rem; // background-color: aqua;
                        color: #00FFFF;
                        font-size: .18rem;
                        text-align: center;
                        line-height: 1rem;
                        margin-left: .13rem;
                        background: url("../../assets/imgs/normal.png") no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                    .bgImg {
                        background: url("../../assets/imgs/warn.png") no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .bangonglou_contaner {
            margin-top: .3rem;
            height: 7.7rem;
            width: 100%;
            background: url("../../assets/imgs/OfficeBuilding.png") no-repeat;
            background-size: 100% 100%;
        }
        .bangonglou_contaner2 {
            margin-top: .3rem;
            height: 7.7rem;
            width: 100%;
            .bangonglou_contaner2_left {
                width: 3.2rem;
                height: 6.4rem;
                // background-color: red;
                float: left;
                padding-left: .3rem;
                ul {
                    .bangonglou_contaner2_right_li {
                        width: 1.2rem;
                        height: .6rem;
                        background: url("../../assets/imgs/staticRoom.png") no-repeat;
                        background-size: 100% 100%;
                        float: left;
                        margin-top: .25rem;
                        position: relative;
                        cursor: pointer;
                        .bangonglou_contaner2_right_li_lv {
                            height: .3rem;
                            width: .3rem;
                            // background-color: yellow;
                            position: absolute;
                            left: 0;
                            top: 0;
                            img {
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%,-50%);
                            }
                        }
                        .bangonglou_contaner2_right_li_hong {
                            height: .3rem;
                            width: .3rem;
                            // background-color: #0ff;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            img {
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%,-50%);
                            }
                        }
                        .bangonglou_contaner2_right_li_title {
                            width: 100%;
                             position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%,-50%);
                                font-size: .16rem;
                                color: #4BFEFE;
                                text-align: center;
                        }
                    }
                    .bangonglou_contaner2_right_li_bg {
                        background: url("../../assets/imgs/warnRoom.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    .bangonglou_contaner2_right_li:nth-child(2n) {
                        margin-left: .15rem;
                    }
                }
                .pagination {
                    width: 1rem;
                    position: absolute;
                    bottom: 1.35rem;
                    left: 0;
                }
            }
            .bangonglou_contaner2_right {
                width: 4.1rem;
                height: 7.7rem;
                float: right;
                background: url("../../assets/imgs/OfficeBuilding2.png") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
</style>