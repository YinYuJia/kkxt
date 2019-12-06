<!-- contener -->
<template>
    <div class="best">
        <!-- <p class="best_div"> 中间部分</p> -->
        <div class="antzone"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {
    // console.log(this.$DD.ApiUrl())
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {}
}
</script>
<style lang='less' scoped>
    .best {
        height: 5rem;
        width: 5rem;
        background-color: aqua;
        margin-left: 50%;
        border-top: 1px solid transparent;
        transform: translateX(-50%);
        .best_div {
            height: 1rem;
            width: 1rem;
            background-color: red;
            margin: 50% 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            line-height: 1rem;
            font-size: .18rem;
            color: yellow;
        }
        .antzone,
        .antzone::before,
        .antzone::after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .antzone {
            width: 200px;
            height: 200px;
            margin: auto;
            color: red;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 98, 0.9);
        }
        .antzone::before,
        .antzone::after {
            content: '';
            z-index: -1;
            // margin: -5%;
            box-shadow: inset 0 0 0 2px;
            animation: clipMe 8s linear infinite;
        }
        .antzone::before {
            animation-delay: -4s;
        }
        @keyframes clipMe {
            0%,
            100% {
                clip: rect(0px, 200px, 2px, 0px);
            }
            25% {
                clip: rect(0px, 0px, 200px, 0px);
            }
            50% {
                clip: rect(200.0px, 200px, 200px, 0px);
            }
            75% {
                clip: rect(0px, 200px, 200px, 200.0px);
            }
        }
    }
    /* @import url(); 引入css类 */
</style>
