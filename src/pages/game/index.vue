<template>
  <div class="game">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入关键字">
      <img src="../../media/images/search.png" alt="">
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
    }
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
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 7px;
      right: 12px;
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
