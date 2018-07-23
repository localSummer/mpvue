<template>
  <div class="game">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入关键字">
      <div class="search-img"></div>
    </div>
    <div class="tabs">
      <div :class="{active: activeTab === 0}" @click="handleActiveTab(0)">国赛</div>
      <div :class="{active: activeTab === 1}" @click="handleActiveTab(1)">省赛</div>
      <div :class="{active: activeTab === 2}" @click="handleActiveTab(2)">行赛</div>
      <div :class="{active: activeTab === 3}" @click="handleActiveTab(3)">企业</div>
    </div>
    <div v-if="activeTab === 0">
      <country-game></country-game>
    </div>
    <div v-if="activeTab === 1">
      <province-game></province-game>
    </div>
    <div v-if="activeTab === 2">
      <race-game></race-game>
    </div>
    <div v-if="activeTab === 3">
      <company-game></company-game>
    </div>
  </div>
</template>

<script>
import countryGame from '@/components/country-game'
import provinceGame from '@/components/province-game'
import raceGame from '@/components/race-game'
import companyGame from '@/components/company-game'

export default {
  data () {
    return {
      search: '',
      activeTab: 0
    }
  },
  components: {
    countryGame,
    provinceGame,
    raceGame,
    companyGame
  },
  methods: {
    handleActiveTab (num) {
      this.activeTab = num
      this.$store.dispatch('updateGameActiveTab', this.activeTab)
    }
  },
  onUnload () {
    this.search = ''
    this.activeTab = 0
    this.$store.dispatch('updateGameActiveTab', 0)
  }
}
</script>

<style scoped lang="less">
  .search {
    width: 331px;
    margin: 20px auto 0;
    border-radius: 15px;
    border: 1px solid  #ff9900;
    position: relative;
    input {
      height: 30px;
      line-height: 30px;
      padding: 0 20px 0 10px;
      font-size: 14px;
      font-weight: bold;
      color: #666;
    }
    .search-img {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 7px;
      right: 12px;
      background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M991.397 907.301l-305.51-305.508c42.707-60.227 67.893-131.405 67.893-209.148-3.286-101.837-38.327-186.153-106.216-252.95C580.766 71.802 496.449 36.762 394.612 33.477 292.775 36.762 208.46 71.802 140.568 139.693 73.77 206.49 38.73 290.806 36.54 392.643c3.285 101.835 38.325 186.153 105.122 254.043 66.796 66.796 151.112 101.836 252.95 104.026 77.744 0 147.827-24.09 208.052-66.796l305.51 306.607 83.222-83.222zM106.622 392.643c2.19-82.127 30.661-150.018 84.317-203.674s121.546-82.126 203.673-84.316c82.127 2.19 150.016 30.66 203.674 84.316 54.75 53.656 83.221 121.547 85.41 203.674-2.189 82.127-30.66 150.016-85.41 203.674-53.658 53.655-121.549 82.124-203.674 84.314-82.127-2.19-150.018-30.659-203.673-84.314-53.656-53.658-82.127-121.547-84.317-203.674z' fill='%23f90'/%3E%3C/svg%3E");
      background-size: cover;
    }
  }
  .tabs {
    margin-top: 25px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    height: 37px;
    align-items: center;
    font-size: 14px;
    color: #000;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    font-weight: bold;
    div {
      width: 82px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      box-sizing: border-box;
    }
    .active {
        color: #f60;
        border-bottom: 2px solid #f60;
        background-color: #fff;
    }
  }
</style>
