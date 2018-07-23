<template>
  <div>
    <div class="header">
      <div class="person"></div>
      <span>下午好，欢迎使用数据统计分析</span>
    </div>
    <div class="wrap">
        <div class="wrap-item">
          <div>
            <div class="wrap-img wrap-img-date"></div>
            <div class="wrap-info">日期</div>
          </div>
          <div class="wrap-input">
            <input type="text" disabled v-model="getSelectDate">
          </div>
          <div class="wrap-spread" @click="handleSpread(0)"></div>
        </div>
        <div class="wrap-item">
          <div>
            <div class="wrap-img wrap-img-game"></div>
            <div class="wrap-info">大赛</div>
          </div>
          <div class="wrap-input">
            <input type="text" disabled v-model="selectGame.name">
          </div>
          <div class="wrap-spread" @click="handleSpread(1)"></div>
        </div>
        <div class="wrap-item">
          <div>
            <div class="wrap-img wrap-img-user"></div>
            <div class="wrap-info">用户</div>
          </div>
          <div class="wrap-input">
            <input type="text" disabled v-model="selectUser.name">
          </div>
          <div class="wrap-spread" @click="handleSpread(2)"></div>
        </div>
    </div>
    <button class="submit" :disabled="this.getSelectDate === '' && this.selectGame.id === '' && this.selectUser.id === ''" @click="handleLook">查看</button>
</div>
  
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters([
      'getSelectDate'
    ]),
    ...mapState([
      'selectGame',
      'selectUser'
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
      background-image: url("data:image/svg+xml, %3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M512 598.016q107.99 0 224.981 47.019t116.992 123.008v86.016H169.984v-86.016q0-75.99 116.992-123.008t224.981-47.019zM512 512q-70.016 0-120.021-50.005t-50.006-120.022 50.006-121.002T512 169.984t120.021 50.987 50.006 121.002-50.006 120.022T512 512z' fill='%23f90'/%3E%3C/svg%3E"); 
      background-size: cover;
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
        background-size: cover;
      }
      .wrap-img-date {
        background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M512 192c-212.064 0-384 171.936-384 384s171.936 384 384 384 384-171.936 384-384-171.936-384-384-384zm203.648 587.648C661.248 834.048 588.928 864 512 864s-149.248-29.952-203.648-84.352C253.952 725.248 224 652.928 224 576s29.952-149.248 84.352-203.648C362.752 317.952 435.072 288 512 288s149.248 29.952 203.648 84.352C770.048 426.752 800 499.072 800 576s-29.952 149.248-84.352 203.648zM325.92 203.872l-42.944-85.888C184.096 167.52 103.52 248.128 53.984 347.008l85.888 42.944c40.256-80.352 105.728-145.824 186.08-186.08zM884.128 389.92l85.888-42.944c-49.536-98.88-130.112-179.488-228.992-229.024L698.08 203.84c80.352 40.256 145.824 105.728 186.08 186.08zM512 384h-64v192c0 10.112 4.704 19.104 12.032 24.96l160 128L660 678.976l-148-118.4V383.968z' fill='%23666'/%3E%3C/svg%3E");
      }
      .wrap-img-game {
        background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M686.031 546.538H510.358v175.658h175.673V546.538zm-35.156-386.5v70.25h-281.07v-70.25h-70.32v70.25h-35.103c-38.704 0-70.311 31.614-70.311 70.32v491.898c0 38.66 31.607 70.259 70.311 70.259h491.899c38.608 0 70.258-31.599 70.258-70.26V300.608c0-38.705-31.65-70.318-70.258-70.318h-35.149v-70.251h-70.257zm105.407 632.468H264.383V406.014h491.899v386.492z' fill='%23666'/%3E%3C/svg%3E");
      }
      .wrap-img-user {
        background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M682.667 469.333c72.533 0 128-55.466 128-128 0-72.533-55.467-128-128-128-72.534 0-128 55.467-128 128 0 72.534 55.466 128 128 128zm-341.334 0c72.534 0 128-55.466 128-128 0-72.533-55.466-128-128-128-72.533 0-128 55.467-128 128 0 72.534 55.467 128 128 128zm0 85.334c-98.133 0-298.666 51.2-298.666 149.333v106.667H640V704c0-98.133-200.533-149.333-298.667-149.333zm341.334 0c-12.8 0-25.6 0-42.667 4.266 51.2 34.134 85.333 85.334 85.333 145.067v106.667h256V704c0-98.133-200.533-149.333-298.666-149.333z' fill='%23666'/%3E%3C/svg%3E");
        
      }
      .wrap-spread {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M147.012 430.89c-44.791 0-81.109 36.305-81.109 81.11 0 44.779 36.317 81.108 81.109 81.108 44.792 0 81.109-36.33 81.109-81.108 0-44.805-36.316-81.11-81.11-81.11zm364.987 0c-44.79 0-81.108 36.305-81.108 81.11 0 44.779 36.316 81.108 81.108 81.108 44.793 0 81.11-36.33 81.11-81.108 0-44.805-36.317-81.11-81.11-81.11zm364.988 0c-44.79 0-81.108 36.305-81.108 81.11 0 44.779 36.316 81.108 81.108 81.108s81.109-36.33 81.109-81.108c-.002-44.805-36.318-81.11-81.109-81.11z' fill='%23666'/%3E%3C/svg%3E");
        background-color: cover;
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
