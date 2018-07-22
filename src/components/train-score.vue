<template>
  <div class="score">
    <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleScoreInit" ref="score"  canvasId="score" />
  </div>
</template>

<script>
  import {trainScore} from '../utils/echartOptions'
  import * as echarts from 'echarts/dist/echarts.min'
  import mpvueEcharts from 'mpvue-echarts'

  let chartScore = null

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
      initScore (option) {
        this.option = option
        this.$refs.score.init()
      },
      handleScoreInit (canvas, width, height) {
        chartScore = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chartScore)
        chartScore.setOption(this.option)
        return chartScore
      }
    },
    mounted () {
      let _this = this
      _this.initScore(trainScore)
    //   setTimeout(function () {
    //     testChart.series[0].data = [100, 200, 300, 50, 200, 900, 190]
    //     _this.initScore(testChart)
    //   }, 2000)
    }
  }
</script>

<style scoped lang="less">
  .score {
    width: 100%;
    height: 200px;
  }
</style>
