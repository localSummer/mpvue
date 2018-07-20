<template>
  <div>
    <div class="header">
      <img class="person" src="../../media/images/person.png" alt="">
      <span>下午好，欢迎使用数据统计分析</span>
      <img class="apps" src="../../media/images/apps.png" alt="">
    </div>
    <div class="date">
      <span>2017-07 ~ 2018-07</span>
      <img src="../../media/images/down.png" alt="">
    </div>
    <div class="last">
      <div class="date-last">
        <span :class="{active: active === 0}" @click="handleActive(0)">最近一周</span>
        <span :class="{active: active === 1}" @click="handleActive(1)">最近一月</span>
        <span :class="{active: active === 2}" @click="handleActive(2)">最近半年</span>
        <span :class="{active: active === 3}" @click="handleActive(3)">最近一年</span>
    </div>
    </div>
</div>
  
</template>

<script>

export default {
  data () {
    return {
      userInfo: {},
      active: 0
    }
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    handleActive (activeDate) {
      this.active = activeDate
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
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
    position: relative;
    .person {
      width: 60rpx;
      height: 60rpx;
      display: inline-block;
      margin-right: 8rpx;
    }
    span {
      font-size: 32rpx;
      color: #1f1f1f;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .apps {
      position: absolute;
      top: 18rpx;
      right: 16rpx;
      width: 48rpx;
      height: 48rpx;
    }
  }
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16rpx;
    img {
      display: inline-block;
      width: 32rpx;
      height: 32rpx;
    }
    span {
      font-size: 30rpx;
      margin-right: 60rpx;
      color: #424242;
    }
  }
  .last {
    border-bottom: 2rpx dashed #ccc;
    padding-bottom: 16rpx;
  }
  .date-last {
    width: 600rpx;
    margin: 0 auto;
    span {
      box-sizing: border-box;
      display: inline-block;
      text-align: center;
      width: 150rpx;
      border-right: 4rpx solid #085294;
      font-size: 30rpx;
      color: #ff9901;
    }
    span:last-child {
      border-right: none;
    }
    .active {
      color: #085394;
    }
  }
</style>
