<template>
  <div class="frequency">
    <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleTrendInit" ref="trend"  canvasId="trend" />
    <ul class="list">
        <li :class="{active: active === 0}" @click="handleActive(0)">使用次数</li>
        <li :class="{active: active === 1}" @click="handleActive(1)">使用时长</li>
    </ul>
  </div>
</template>

<script>
  import {frequencyTrend} from '../utils/echartOptions'
  import * as echarts from 'echarts/dist/echarts.min'
  import mpvueEcharts from 'mpvue-echarts'

  let chartTrend = null

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
      initTrend (option) {
        this.option = option
        this.$refs.trend.init()
      },
      handleTrendInit (canvas, width, height) {
        chartTrend = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chartTrend)
        chartTrend.setOption(this.option)
        return chartTrend
      },
      handleActive (num) {
        this.active = num
        let date = ['17/10', '11', '12', '18/01', '02', '03', '04']
        let data = [820, 932, 901, 934, 1290, 800, 500]
        if (num === 0) {
          this.initTrend(frequencyTrend({
            title: '使用次数趋势图',
            date,
            data
          }))
        } else {
          this.initTrend(frequencyTrend({
            title: '使用时长趋势图',
            date,
            data
          }))
        }
      }
    },
    mounted () {
      let _this = this
      let date = ['17/10', '11', '12', '18/01', '02', '03', '04']
      let data = [820, 932, 901, 934, 1290, 800, 500]
      _this.initTrend(frequencyTrend({
        title: '使用次数趋势图',
        date,
        data
      }))
    }
  }
</script>

<style scoped lang="less">
  .frequency {
    width: 100%;
    height: 200px;
    position: relative;
    .list {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 73px;
        li {
            width: 73px;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #000;
            font-weight: bold;
            border: 1px solid #f60;
            border-radius: 7px;
            text-align: center;
            background-color: transparent;
        }
        li:first-child {
            margin-bottom: 3px;
        }
        .active {
            background-color: #ff9a03;
        }
    }
  }
</style>
