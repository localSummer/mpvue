<template>
  <div class="analysis">
    <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleAnalysisInit" ref="analysis"  canvasId="analysis" />
  </div>
</template>

<script>
  import {timeAnalysis} from '../utils/echartOptions'
  import * as echarts from 'echarts/dist/echarts.min'
  import mpvueEcharts from 'mpvue-echarts'

  let chartAnalysis = null

  export default {
    data () {
      return {
        option: null,
        echarts,
        active: 0
      }
    },
    components: {
      mpvueEcharts
    },
    methods: {
      initAnalysis (option) {
        this.option = option
        this.$refs.analysis.init()
      },
      handleAnalysisInit (canvas, width, height) {
        chartAnalysis = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chartAnalysis)
        chartAnalysis.setOption(this.option)
        return chartAnalysis
      }
    },
    mounted () {
      let _this = this
      _this.initAnalysis(timeAnalysis)
    //   setTimeout(function () {
    //     testChart.series[0].data = [100, 200, 300, 50, 200, 900, 190]
    //     _this.initAnalysis(testChart)
    //   }, 2000)
    }
  }
</script>

<style scoped lang="less">
  .analysis {
    width: 100%;
    height: 200px;
  }
</style>
