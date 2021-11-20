/**
* create by zhangxiang on 2021-11-20 14:40
* 类注释：
* 备注：
*/
<template>
  <el-card :body-style="{padding:'10px'}">
    <div :id="id" class="lineChart" />
  </el-card>
</template>

<script type="text/ecmascript-6">
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])
export default {
  name: 'LineChart',
  components: {},
  props: {
    id: {
      type: String,
      default: 'line-chart'
    }
  },
  data() {
    return {}
  },
  computed: {},
  activated() {
  },
  mounted() {
  },
  created() {
  },
  methods: {
    initChart(xData, yData) {
      const chartDom = document.getElementById(this.id)
      const myChart = echarts.init(chartDom)
      let option = null
      option = {
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true
          }
        },
        series: [
          {
            data: yData,
            type: 'line'
          }
        ]
      }
      option && myChart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
.lineChart {
  height: 300px;
  width: 100%;
}
</style>
