<template>
  <div class="game">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入关键字">
      <img src="../../media/images/search.png" alt="">
    </div>
    <div class="wrap">
        <radio-group @change="radioChange">
          <div class="item" v-for="(item, index) in items" :key="index">
            <label>
              <radio color="#f60" :value="item.id" /> {{item.name}}
            </label>
          </div>
        </radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {id: 'ALL', name: '全部选择'},
        {id: '1', name: 'race年全国工业分析检验技能大赛'},
        {id: '2', name: '2018年第二届全国大学生化工实验大赛华东赛区'},
        {id: '3', name: '2019年全国工业分析检验技能大赛'},
        {id: '4', name: '2019年全国工业分析检验技能大赛'},
        {id: '5', name: '2019年全国工业分析检验技能大赛'}
      ],
      search: ''
    }
  },
  methods: {
    radioChange: function (e) {
      this.select = e.mp.detail.value
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
  .wrap {
    margin-top: 10px;
    padding: 0 15px;
    color: #000;
    font-size: 12px;
    height: 530px;
    overflow-y: auto;
    .item {
      line-height: 45px;
    }
  }
</style>
