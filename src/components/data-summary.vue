<template>
  <div class="summary">
    <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleInit" ref="dataSummary" canvasId="summary" />
  </div>
</template>

<script>
  import * as echarts from 'echarts/dist/echarts.min'
  import mpvueEcharts from 'mpvue-echarts'
  import {dataSummary} from '../utils/echartOptions'
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
        this.$refs.dataSummary.init()
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
      let plantCap = [{
        name: '总次数',
        value: '735 (人次)'
      }, {
        name: '总时长',
        value: '600 (m)'
      }, {
        name: '平均时长',
        value: '30 (m)'
      }, {
        name: '平均次数',
        value: '2 (人次)'
      }, {
        name: '总用户数',
        value: '143 (个)'
      }, {
        name: '总账号数',
        value: '735 (个)'
      }]
      let options = dataSummary(plantCap)
      _this.initChart(options)
    }
  }
</script>

<style scope lang="less">
.summary {
  width: 100%;
  height: 245px;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 1px dashed #ccc;
}
</style>
