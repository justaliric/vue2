<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from "@/assets/data.json"
export default {
  data () {
    return {

    }
  },
  mounted () {
    //echarts注册
    let myChart = this.$echarts.init(document.getElementById('main'))
    //注册可用的地图，必须包括geo组件或者map图表类型的时候才能使用
    this.$echarts.registerMap('china', geoJson)
    let option = {
      geo: {
        map: 'china',
        aspecScale: 0.75, //地图长宽比
        zoom: 1.1, //缩放
        regions: [{
          name: '南海诸岛'
        }]
      },
      series: [
        {
          //配置地图相关参数，绘制地图
          type: 'map',
          zoom: 1.1,
          map: 'china',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgb(37, 120, 181)'
              }
            },
            emphasis: {
              textStyle: {
                color: '#1e1e1e'
              }
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  },
}
</script>

<style lang="scss">
.map-view {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>