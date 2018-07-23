<template>
  <div>
    <div class="header">
      <img class="person" src="../../media/images/person.png" alt="person">
      <span>下午好，欢迎使用数据统计分析</span>
    </div>
    <div class="wrap">
        <div class="wrap-item">
          <div>
            <img class="wrap-img" src="../../media/images/date.png" alt="">
            <div class="wrap-info">日期</div>
          </div>
          <div class="wrap-input">
            <input type="text" disabled v-model="getSelectDate">
          </div>
          <img class="wrap-spread" @click="handleSpread(0)" src="../../media/images/spread.png" alt="">
        </div>
        <div class="wrap-item">
          <div>
            <img class="wrap-img" src="../../media/images/game.png" alt="">
            <div class="wrap-info">大赛</div>
          </div>
          <div class="wrap-input">
            <input type="text" disabled v-model="game">
          </div>
          <img class="wrap-spread" @click="handleSpread(1)" src="../../media/images/spread.png" alt="">
        </div>
        <div class="wrap-item">
          <div>
            <img class="wrap-img" src="../../media/images/group.png" alt="">
            <div class="wrap-info">用户</div>
          </div>
          <div class="wrap-input">
            <input type="text" disabled v-model="group">
          </div>
          <img class="wrap-spread" @click="handleSpread(2)" src="../../media/images/spread.png" alt="">
        </div>
    </div>
    <button class="submit" @click="handleLook">查看</button>
</div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      game: '2018第三节全国食品营养与安全检测技能大赛',
      group: '北京石油化工学院'
    }
  },
  computed: {
    ...mapGetters([
      'getSelectDate'
    ])
  },
  methods: {
    handleLook () {
      wx.navigateBack()
    },
    handleSpread (num) {
      if (num === 0) {
        wx.navigateTo({
          url: '../calendar/main'
        })
      } else if (num === 1) {
        wx.navigateTo({
          url: '../game/main'
        })
      } else {
        wx.navigateTo({
          url: '../user/main'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rpx;
    border-bottom: 2rpx solid #ccc;
    .person {
      width: 60rpx;
      height: 60rpx;
      display: inline-block;
      margin-right: 8rpx;
    }
    span {
      font-size: 32rpx;
      color: #000;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  .wrap {
    height: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .wrap-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wrap-img {
        display: inline-block;
        width: 36px;
        height: 36px;
      }
      .wrap-spread {
        display: inline-block;
        width: 24px;
        height: 24px;
      }
      .wrap-info {
        color: #ff9a02;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
      }
      .wrap-input {
        border: 1px solid #666;
        border-radius: 8px;
        width: 234px;
        input {
          height: 38px;
          line-height: 38px;
          text-align: center;
          font-size: 12px;
          padding: 0 10px;
          width: 214px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .submit {
    width: 335px;
    height: 48px;
    line-height: 48px;
    margin: 0 auto;
    background-color: #ff9a02;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
  }
</style>
