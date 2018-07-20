<template>
  <div>
    <button @click="handleIndex">turn index</button>
    {{test}}
    <div class="container">
      <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
    </div>
  </div>
</template>

<script>
  import {testChart} from '../../utils/echartOptions'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        ec: {
          options: testChart
        }
      }
    },
    computed: {
      ...mapState([
        'test'
      ])
    },
    methods: {
      handleIndex () {
        wx.redirectTo({
          url: '../index/main'
        })
      }
    },
    mounted () {
      console.log('bar mounted')
    }
  }
</script>

<style scoped>
  ec-canvas {
    width: 400px;
    height: 400px;
  }
</style>
