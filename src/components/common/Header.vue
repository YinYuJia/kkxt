<!--  -->
<template>
  <div class="header">
    <p class="p">空开平台</p>
  </div>
</template>

<script>
  export default {
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
  .header {
        position: relative;
        left: 0;
        top: .4rem;
        height: .5rem;
  }
  .p {
        position: absolute;
        left: 50%;
        overflow: hidden;
        height: 100%;
        line-height: .5rem;
        text-align: center;
        width: 7.94rem;
        font-size: .24rem;
        color: #28CD9C;
        background: url("../../assets/imgs/hearderBgImg.png") no-repeat ;
        background-size: 100% 100%;
        transform: translateX(-50%);

  }
</style>