<!--  -->
<template>
  <div class="index">
    <Header></Header>
    <Left :powerInfoData="powerInfoData" class="left"></Left>
    <powerInfoEchart :powerInfoData="powerInfoData" class="powerInfoEchart"></powerInfoEchart>
    <ElectricityConsumption :AllList="AllList"></ElectricityConsumption>
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
      Left,
      powerInfoEchart,
      ElectricityConsumption,
      gbbgl,
      rightEchart,
      warningInfo
    },
    data() {
      return {
        powerInfoData: {
          yestoday: "",
          today: "",
        },
        AllList: []
      }
    },
    // 生命周期 - 创建完成（访问当前this实例）
    created() {
      //获取电量数据
      this.getElectricity("yestoday")
      this.getElectricity("today")
    },
    // 生命周期 - 挂载完成（访问DOM元素）
    mounted() {
    },
    methods: {
      getElectricity(str) {
        let yestoday = this.$util.getDay(-1, "-")
        let today = this.$util.getDay(0, "-")
        let parmas = {}
        console.log("yestoday---", yestoday)
        console.log("today---", today)
        if (str == "yestoday") {
          parmas = {
            "start": yestoday,
            "end": yestoday,
            "kind": "HOURLY",
            "id": 6
          }
        } else if (str == "today") {
          parmas = {
            "start": today,
            "end": today,
            "kind": "HOURLY",
            "id": 6
          }
        }
        let data = this.$util.ParameterMatching("/ApiUrl2/sas/api/switch-box/" + parmas.id + "/summary", parmas)
        this.$axios.get(data).then((resData) => {
          let max = null
          for (let key in resData) {
            resData[key].map((item, index) => {
              max += Number(item.electricity) //用电量相加
              this.AllList.push(item)
            })
          }
          max = Math.floor(max * 100) / 100
          // max = max.toFixed(3); // 输出结果为 0.000
          if (str == "yestoday") {
            this.powerInfoData.yestoday = max
          } else if (str == "today") {
            this.powerInfoData.today = max
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
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
      position: absolute;
      left: 13.94rem;
      top: 2.1rem;
    }
    .warningInfo {
      position: absolute;
      left: 13.94rem;
      top: 5.5rem;
    }
  }
</style>
