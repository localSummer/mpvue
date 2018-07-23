<template>
  <div class="province">
    <div class="group">
      <radio-group @change="radioChange">
        <div class="item" v-for="(item, index) in items" :key="index">
          <label>
            <radio color="#f60" :value="item.id + '-' + item.name" /> {{item.name}}
          </label>
        </div>
      </radio-group>
    </div>
    <button :class="['submit', {disabled: select.value === ''}]" :disabled="select.value === ''" @click="handleSubmit">确定</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {id: 'ALL', name: '全部选择'},
        {id: '1', name: 'province年全国工业分析检验技能大赛'},
        {id: '2', name: '2018年第二届全国大学生化工实验大赛华东赛区'},
        {id: '3', name: '2019年全国工业分析检验技能大赛'},
        {id: '4', name: '2019年全国工业分析检验技能大赛'},
        {id: '5', name: '2019年全国工业分析检验技能大赛'},
        {id: '6', name: '2019年全国工业分析检验技能大赛'},
        {id: '7', name: '2019年全国工业分析检验技能大赛'},
        {id: '8', name: '2019年全国工业分析检验技能大赛'},
        {id: '9', name: '2019年全国工业分析检验技能大赛'},
        {id: '10', name: '2019年全国工业分析检验技能大赛'},
        {id: '11', name: '2019年全国工业分析检验技能大赛'},
        {id: '12', name: '2019年全国工业分析检验技能大赛'},
        {id: '13', name: '2019年全国工业分析检验技能大赛'},
        {id: '14', name: '2019年全国工业分析检验技能大赛'},
        {id: '15', name: '2019年全国工业分析检验技能大赛'},
        {id: '16', name: '2019年全国工业分析检验技能大赛'},
        {id: '17', name: '2019年全国工业分析检验技能大赛'}
      ],
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
      // console.log(this.select)
    },
    handleSubmit () {
      this.$store.dispatch('updateSelectGame', {
        id: this.select.value,
        name: this.select.name
      })
    }
  },
  onUnload () {
    this.select.name = ''
    this.select.id = ''
  }
}
</script>

<style scoped lang="less">
.province {
  color: #000;
  font-size: 12px;
  height: 470px;
  padding: 0 15px;
  overflow-y: auto;
  .item {
    line-height: 36px;
  }
  .group {
    height: 400px;
    margin-bottom: 20px;
    overflow-y: auto;
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
  .disabled {
    background-color: #F7F7F7;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
