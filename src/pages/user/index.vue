<template>
  <div class="game">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入关键字">
      <div class="search-img"></div>
    </div>
    <div class="wrap">
        <radio-group @change="radioChange">
          <scroll-view scroll-y :scroll-into-view="toView" class="scroll-wrap">
            <div :id="item.type" class="item" v-for="(item, index) in items" :key="index">
              <label>
                <radio color="#f60" :value="item.id + '-' + item.name" /> {{item.name}}
              </label>
            </div>
          </scroll-view>
        </radio-group>
        <div class="alpha">
          <div v-for="(item, index) in alphas" :key="index" :class="{active: active === item}" @click="handleActive(item)">{{item}}</div>
        </div>
    </div>
    <button class="submit" :disabled="select.value === ''" @click="handleSubmit">确定</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {id: 'ALL', name: '全部选择', type: 'A'},
        {id: '1', name: 'race年全国工业分析检验技能大赛', type: 'B'},
        {id: '2', name: '2018年第二届全国大学生化工实验大赛华东赛区', type: 'C'},
        {id: '3', name: '2019年全国工业分析检验技能大赛', type: 'D'},
        {id: '4', name: '2019年全国工业分析检验技能大赛', type: 'E'},
        {id: '5', name: '2019年全国工业分析检验技能大赛', type: 'F'},
        {id: '6', name: '2019年全国工业分析检验技能大赛', type: 'G'},
        {id: '7', name: '2019年全国工业分析检验技能大赛', type: 'H'},
        {id: '8', name: '2019年全国工业分析检验技能大赛', type: 'I'},
        {id: '9', name: '2019年全国工业分析检验技能大赛', type: 'G'},
        {id: '10', name: '2019年全国工业分析检验技能大赛', type: 'K'},
        {id: '11', name: '2019年全国工业分析检验技能大赛', type: 'L'},
        {id: '12', name: '2019年全国工业分析检验技能大赛', type: 'M'},
        {id: '13', name: '2019年全国工业分析检验技能大赛', type: 'N'},
        {id: '14', name: '2019年全国工业分析检验技能大赛', type: 'O'},
        {id: '15', name: '2019年全国工业分析检验技能大赛', type: 'P'},
        {id: '16', name: '2019年全国工业分析检验技能大赛', type: 'Q'},
        {id: '17', name: '2019年全国工业分析检验技能大赛', type: 'R'},
        {id: '18', name: '2019年全国工业分析检验技能大赛', type: 'S'},
        {id: '19', name: '2019年全国工业分析检验技能大赛', type: 'T'},
        {id: '20', name: '2019年全国工业分析检验技能大赛', type: 'U'},
        {id: '21', name: '2019年全国工业分析检验技能大赛', type: 'V'},
        {id: '22', name: '2019年全国工业分析检验技能大赛', type: 'W'},
        {id: '23', name: '2019年全国工业分析检验技能大赛', type: 'X'},
        {id: '24', name: '2019年全国工业分析检验技能大赛', type: 'Y'},
        {id: '25', name: '2019年全国工业分析检验技能大赛', type: 'Z'},
        {id: '26', name: '2019年全国工业分析检验技能大赛', type: 'A'}
      ],
      alphas: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      active: 'A',
      search: '',
      toView: 'ALL',
      select: {
        name: '',
        value: ''
      }
    }
  },
  methods: {
    radioChange: function (e) {
      let idName = e.mp.detail.value.split('-')
      this.select.value = idName[0]
      this.select.name = idName[1]
    },
    handleActive (alpha) {
      this.active = alpha
      this.toView = alpha
    },
    handleSubmit () {
      this.$store.dispatch('updateSelectUser', {
        id: this.select.value,
        name: this.select.name
      })
      wx.navigateBack()
    }
  },
  onUnload () {
    this.active = 'A'
    this.toView = 'ALL'
    this.select.name = ''
    this.select.value = ''
    this.search = ''
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
      padding: 0 35px 0 10px;
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
  .wrap {
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 0 10px 0 15px;
    color: #000;
    font-size: 12px;
    height: 480px;
    position: relative;
    .item {
      line-height: 45px;
    }
    .alpha {
        position: absolute;
        top: 0;
        right: 30px;
        color: #ccc;
        font-size: 14px;
        div {
            width: 20px;
            vertical-align: middle;
            text-align: center;
        }
        .active {
            border-radius: 50%;
            background: #ff9900;
            color: #fff;
        }
    }
  }
  .scroll-wrap {
    height: 480px;
  }
  .submit {
    width: 280px;
    height: 36px;
    line-height: 36px;
    margin: 0 auto;
    background-color: #ff9a02;
    color: #000;
    font-size: 15px;
    font-weight: bold;
    border-radius: 8px;
  }
</style>
