<template>
  <div>
    <div class="container">
      <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
    </div>
  </div>
</template>

<script>
  import {testChart} from '../../utils/echartOptions'
  export default {
    data () {
      return {
        ec: {
          options: testChart
        }
      }
    }
  }
</script>

<style scoped>
  ec-canvas {
    width: 400px;
    height: 400px;
  }
</style>
