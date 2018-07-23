<template>
  <div class="race">
    <radio-group @change="radioChange">
        <div class="item" v-for="(item, index) in items" :key="index">
          <label>
            <radio color="#f60" :value="item.id" /> {{item.name}}
          </label>
        </div>
    </radio-group>
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
      select: ''
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
.race {
  color: #000;
  font-size: 12px;
  height: 470px;
  padding: 0 15px;
  overflow-y: auto;
  .item {
    line-height: 36px;
  }
}
</style>
