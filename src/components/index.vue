<!--  -->
<template>
  <div class="index">
    <Header></Header>
    <Left class="left"></Left>
    <powerInfoEchart class="powerInfoEchart"></powerInfoEchart>
    <ElectricityConsumption></ElectricityConsumption>
    <gbbgl class="gbbgl"></gbbgl>
    <rightEchart class="rightEchart"></rightEchart>
    <warningInfo class="warningInfo"></warningInfo>
  </div>
</template>

<script>
  import Left from "./serveComponent/Left";
  import powerInfoEchart from "./serveComponent/powerInfoEchart";
  import ElectricityConsumption from "./serveComponent/ElectricityConsumption";
  import gbbgl from "./serveComponent/gbbgl";
  import rightEchart from "./serveComponent/rightEchart";
  import warningInfo from "./serveComponent/warningInfo";
  
  export default {
    components: {
      Left,powerInfoEchart,ElectricityConsumption,gbbgl,rightEchart,warningInfo
    },
    data() {
      return {}
    },
    // 生命周期 - 创建完成（访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（访问DOM元素）
    mounted() {}
  }
</script>
<style lang='less' scoped>
  /* @import url(); 引入css类 */
  .index {
    overflow: hidden;
    height: 10.8rem;
    width: 100%;
    font-size: .16rem;
    background: url("../assets/imgs/bgImg.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .left {
      position: relative;
      left: .7rem;
      top: 1.6rem;
    } 
    .powerInfoEchart {
      position: relative;
      left: .7rem;
      top: 1.4rem;
    }
    .gbbgl {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1.32rem;
    }
    .rightEchart {
      position: absolute ;
      left: 13.94rem;
      top: 2.1rem;
    }
    .warningInfo {
      position: absolute ;
      left: 13.94rem;
      top: 5.5rem;
    }
  }
</style>
