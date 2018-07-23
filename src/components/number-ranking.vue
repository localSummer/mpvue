<template>
  <div class="number-rank">
    <div class="title">使用次数排名</div>
    <div class="table">
      <div class="thead">
        <div>TOP</div>
        <div>用户名称</div>
        <div>使用次数</div>
      </div>
      <div :class="['list', {current: index === 0}]" v-for="(item, index) in lists" :key="index">
        <div v-text="item.top"></div>
        <div v-text="item.name"></div>
        <div v-text="item.number"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          top: 321,
          name: '广西工业职业技术学院',
          number: 12
        },
        {
          top: 1,
          name: '辽宁抚顺职业技术学院',
          number: 428
        },
        {
          top: 2,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 3,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 4,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 5,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 6,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 7,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 8,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 9,
          name: '重庆三峡职业学院',
          number: 251
        },
        {
          top: 10,
          name: '重庆三峡职业学院',
          number: 251
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.number-rank {
  width: 100%;
  height: 200px;
  overflow-y: auto;
  .title {
    color: #000;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    margin: 3px 0;
  }
  .table {
    border: 1px solid #666;
    margin: 0 8px;
    font-size: 12px;
    .current {
      color: #ffa114;
    }
    .thead, .list {
      display: flex;
      width: 100%;
      height: 20px;
      justify-content: space-around;
      div {
        flex-grow: 1;
        height: 20px;
        line-height: 20px;
        text-align: center;
        width: 200px;
      }
      div:first-child {
        width: 66px;
        border-right: 1px solid #c5c5c5;
      }
      div:last-child {
        width: 90px;
        border-left: 1px solid #c5c5c5
      }
    }
    .thead, .list:not(:last-child) {
      border-bottom: 1px solid #c5c5c5;
    }
  }
}
</style>
