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
import dataSummary from '@/components/data-summary'
import frequencyTrend from '@/components/frequency-trend'
import timeAnalysis from '@/components/time-analysis'
import trainScore from '@/components/train-score'

export default {
  data () {
    return {
      userInfo: {},
      active: 0,
      activeTab: 0
    }
  },
  components: {
    dataSummary,
    frequencyTrend,
    timeAnalysis,
    trainScore
  },
  methods: {
    handleActive (num) {
      this.active = num
    },
    handleTabActive (num) {
      this.activeTab = num
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
    position: relative;
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
      color: #000;
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
