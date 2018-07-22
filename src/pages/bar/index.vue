<template>
  <div>
    <button>turn index</button>
    <div class="wrap">
      <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleInit" ref="echarts" />
    </div>
  </div>
</template>

<script>
  import {testChart} from '../../utils/echartOptions'
  import * as echarts from 'echarts/dist/echarts.simple.min'
  import mpvueEcharts from 'mpvue-echarts'

  let chart = null

  export default {
    data () {
      return {
        option: null,
        echarts
      }
    },
    components: {
      mpvueEcharts
    },
    methods: {
      initChart (option) {
        this.option = option
        this.$refs.echarts.init()
      },
      handleInit (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chart)
        chart.setOption(this.option)
        return chart
      }
    },
    mounted () {
      let _this = this
      _this.initChart(testChart)
      setTimeout(function () {
        testChart.series[0].data = [100, 200, 300, 50, 200, 900, 190]
        _this.initChart(testChart)
      }, 2000)
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 300px;
  }
</style>
