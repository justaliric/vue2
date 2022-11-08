<template>
  <div class="data-view">
    <el-card>
      <div id="main1">
      </div>
    </el-card>
    <el-card>
      <div id="main2">
      </div>
    </el-card>
  </div>
</template>

<script>
import { dataView } from "@/api/api";
export default {
  data () {
    return {

    }
  },
  created () {
    dataView().then(res => {
      if (res.data.status === 200) {
        let { legend, xAxis, series } = res.data.data
        this.draw(legend, xAxis, series)
      }
    }).catch(err => {
      throw err
    })
  },
  mounted () {
    //初始化echarts实例,需要挂载
    let myChart = this.$echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title: {
        text: '简单的图表'
      },
      tooltip: {},
      xAxis: {
        //x轴
        data: ['一班', '二班', '三班', '四班', '五班', '六班']
      },
      yAxis: {},
      series: [{
        //每项图例具体数据
        name: '人数',
        type: 'bar', //图表类型：bar、line...
        data: [45, 42, 46, 48, 52, 47]
      }]
    })
  },
  methods: {
    draw (legend, xAxis, series) {
      let myChart = this.$echarts.init(document.getElementById('main2'))
      let option = {
        title: {
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend //接口传递
        },
        xAxis: {
          type: 'category', //类目
          data: xAxis //接口传递
        },
        yAxis: {
          type: 'value'
        },
        series: series
      }
      myChart.setOption(option)
    }
  },
}
</script>

<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>