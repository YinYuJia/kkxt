<!--  -->
<template>
    <div class="left">
        <div class="p"> <img class="img" src="../../assets/imgs/icon.png" alt=""> 电量信息分析 <span class="infomation">详情 <img class="infomationImg" src="../../assets/imgs/toRight.png" alt=""></span> </div>
        <div class="p2"></div>
        <div class="left_title">
            <span>房间</span> <span>告警事件</span> <span>告警时间</span>
        </div>
        <div class="left_info">
            <div id="left_info_box">
                <p v-for="item in 100" :key="item.index" class="left_info_p"> <span>{{item}}房间</span> <span>三相不平衡</span> <span>2019-10-10 13:30</span> </p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                timer:null
            }
        },
        
        destroyed() {
            clearInterval(this.timer)
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {},
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            console.log($("#left_info_box"))
            let cont = 0
            this.timer =  setInterval(()=>{ 
                cont++
             $("#left_info_box").animate({marginTop:-0.35*cont  + "rem"},1000,function () {
          
            });
            if(cont >= $("#left_info_box .left_info_p").length  ) {
                cont = 0
            }
            },1000)
        },
        methods: {}
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
            .infomation {
                float: right;
                font-size: .18rem;
                color: #00FFFF;
                overflow: hidden;
                .infomationImg {
                    vertical-align: middle;
                }
            }
        }
        .p2 {
            width: 3.9rem;
            height: .08rem;
            background: url("../../assets/imgs/p2Img.png") no-repeat;
            background-size: 100% 100%;
        }
        .left_title {
            font-size: .16rem;
            color: #00ffff;
            height: .36rem;
            line-height: .36rem;
            margin-top: .3rem;
            background: url("../../assets/imgs/left_title.png") no-repeat;
            background-size: 100% 100%;
            span {
                float: left;
                text-align: left;
                text-indent: .05rem;
            }
            span:nth-child(1) {
                width: 25%;
            }
            span:nth-child(2) {
                width: 25%;
            }
            span:nth-child(3) {
                width: 49.5%;
            }
        }
        .left_info {
            height: 4rem;
            // background-color: rgba(0, 0, 0, .3);
            border-bottom: 2px dashed #ccc;
            overflow: hidden;
            .left_info_p {
                margin-top: .1rem;
                height: .25rem;
                line-height: .25rem;
                span {
                    float: left;
                    text-align: left;
                    text-indent: .05rem;
                    color: #00ffff;
                    font-size: .15rem;
                }
                span:nth-child(1) {
                    width: 25%;
                }
                span:nth-child(2) {
                    width: 25%;
                }
                span:nth-child(3) {
                    width: 49.5%;
                }
            }
        }
    }
</style>