<template>
  <div class="game">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入关键字">
      <img src="../../media/images/search.png" alt="">
    </div>
    <div class="wrap">
        <radio-group @change="radioChange">
          <scroll-view scroll-y :scroll-into-view="toView" class="scroll-wrap">
            <div :id="item.type" class="item" v-for="(item, index) in items" :key="index">
              <label>
                <radio color="#f60" :value="item.id" /> {{item.name}}
              </label>
            </div>
          </scroll-view>
        </radio-group>
        <div class="alpha">
          <div v-for="(item, index) in alphas" :key="index" :class="{active: active === item}" @click="handleActive(item)">{{item}}</div>
        </div>
    </div>
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
      toView: 'ALL'
    }
  },
  methods: {
    radioChange: function (e) {
      this.select = e.mp.detail.value
    },
    handleActive (alpha) {
      this.active = alpha
      this.toView = alpha
    }
  },
  onUnload () {
    this.active = 'A'
    this.toView = 'ALL'
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
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 7px;
      right: 12px;
    }
  }
  .wrap {
    margin-top: 10px;
    padding: 0 10px 0 15px;
    color: #000;
    font-size: 12px;
    height: 530px;
    position: relative;
    .item {
      line-height: 45px;
    }
    .alpha {
        position: absolute;
        top: 0;
        right: 30px;
        color: #ccc;
        font-size: 16px;
        div {
            width: 20px;
            height: 20px;
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
    height: 530px;
  }
</style>
