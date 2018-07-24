<template>
  <div>
    <div class="header">
      <div class="person"></div>
      <span><span v-text="getWelcomeTime"></span>，欢迎使用数据统计分析</span>
      <div @click="handleForwardDate(1)" class="apps"></div>
    </div>
    <div class="date">
      <span class="label">
        <span v-text="selectDate.startDate"></span>
        ~
        <span v-text="selectDate.endDate"></span>
      </span>
      <div class="down" @click="handleForwardDate(0)"></div>
    </div>
    <div class="last">
      <div class="date-last">
        <span :class="{active: active === 0}" @click="handleActive(0)">最近一周</span>
        <span :class="{active: active === 1}" @click="handleActive(1)">最近一月</span>
        <span :class="{active: active === 2}" @click="handleActive(2)">最近半年</span>
        <span :class="{active: active === 3}" @click="handleActive(3)">最近一年</span>
      </div>
    </div>
    <!-- 数据总览 -->
    <data-summary></data-summary>
    <!-- tab切换统计 -->
    <div class="tab">
      <div v-if="activeTab === 0">
        <frequency-trend></frequency-trend>
      </div>
      <div v-if="activeTab === 1">
        <time-analysis></time-analysis>
      </div>
      <div v-if="activeTab === 2">
        <train-score></train-score>
      </div>
      <div v-if="activeTab === 3">
        <number-ranking></number-ranking>
      </div>
      <div v-if="activeTab === 4">
        <time-ranking></time-ranking>
      </div>
    </div>
    
    <ui class="tab-nav">
      <li @click="handleTabActive(0)">
        <div :class="{'tab-active': activeTab === 0}"></div>
      </li>
      <li @click="handleTabActive(1)">
        <div :class="{'tab-active': activeTab === 1}"></div>
      </li>
      <li @click="handleTabActive(2)">
        <div :class="{'tab-active': activeTab === 2}"></div>
      </li>
      <li @click="handleTabActive(3)">
        <div :class="{'tab-active': activeTab === 3}"></div>
      </li>
      <li @click="handleTabActive(4)">
        <div :class="{'tab-active': activeTab === 4}"></div>
      </li>
    </ui>
</div>
  
</template>

<script>
import {mapState} from 'vuex'
import dataSummary from '@/components/data-summary'
import frequencyTrend from '@/components/frequency-trend'
import timeAnalysis from '@/components/time-analysis'
import trainScore from '@/components/train-score'
import numberRanking from '@/components/number-ranking'
import timeRanking from '@/components/time-ranking'
import { getWelcomeTime } from '@/utils/index'

export default {
  data () {
    return {
      userInfo: {},
      active: 0,
      activeTab: 0
    }
  },
  computed: {
    ...mapState([
      'selectDate'
    ]),
    getWelcomeTime
  },
  components: {
    dataSummary,
    frequencyTrend,
    timeAnalysis,
    trainScore,
    numberRanking,
    timeRanking
  },
  methods: {
    handleActive (num) {
      this.active = num
    },
    handleTabActive (num) {
      this.activeTab = num
    },
    handleForwardDate (flag) {
      if (flag === 0) {
        wx.navigateTo({
          url: '../calendar/main'
        })
      } else {
        wx.navigateTo({
          url: '../search/main'
        })
      }
    }
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '欢迎使用数据统计分析',
      path: '/pages/index/main'
    }
  }
}
</script>

<style scoped lang="less">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .person {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin-right: 4px;
      background-image: url("data:image/svg+xml, %3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M512 598.016q107.99 0 224.981 47.019t116.992 123.008v86.016H169.984v-86.016q0-75.99 116.992-123.008t224.981-47.019zM512 512q-70.016 0-120.021-50.005t-50.006-120.022 50.006-121.002T512 169.984t120.021 50.987 50.006 121.002-50.006 120.022T512 512z' fill='%23f90'/%3E%3C/svg%3E"); 
      background-size: cover;
    }
    span {
      font-size: 16px;
      color: #000;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .apps {
      position: absolute;
      top: 9px;
      right: 8px;
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M682.005 853.995V681.984h172.011v172.01h-172.01zm0-256V425.984h172.011v172.01h-172.01zm-256-256V169.984h172.011v172.01h-172.01zm256-171.99h172.011v172.011h-172.01v-172.01zm-256 427.99V425.984h172.011v172.01h-172.01zm-256 0V425.984h172.011v172.01h-172.01zm0 256V681.984h172.011v172.01h-172.01zm256 0V681.984h172.011v172.01h-172.01zm-256-512V169.984h172.011v172.01h-172.01z' fill='%23666'/%3E%3C/svg%3E");
      background-size: cover;
    }
  }
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    .down {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M163.446 275.692h697.108c19.692 0 33.477 25.6 17.723 43.323L537.6 736.492c-11.815 15.754-37.415 15.754-49.23 0L143.753 319.015c-13.785-17.723-1.97-43.323 19.692-43.323z' fill='%23666'/%3E%3C/svg%3E");
      background-size: cover;
    }
    .label {
      font-size: 15px;
      margin-right: 30px;
      color: #000;
    }
  }
  .last {
    border-bottom: 1px dashed #ccc;
    padding-bottom: 8px;
  }
  .date-last {
    width: 300px;
    margin: 0 auto;
    span {
      box-sizing: border-box;
      display: inline-block;
      text-align: center;
      width: 75px;
      border-right: 2px solid #085294;
      font-size: 15px;
      color: #ff9901;
    }
    span:last-child {
      border-right: none;
    }
    .active {
      color: #085394;
    }
  }
  .tab {
    width: 100%;
    height: 200px;
  }
  .tab-nav {
    display: flex;
    justify-content: center;
    li {
      padding: 15px;
      div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #9a9a9a;
      } 
      .tab-active {
        background-color: #fc0;
      }
    }
  }
</style>
