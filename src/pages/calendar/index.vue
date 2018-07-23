<template>
  <div class="date">
    <div class="form">
      <input type="text" disabled="true" v-model="startDate" placeholder="起始日期">
      <img src="../../media/images/arrow-right.png" alt="rightArrow">
      <input type="text" disabled="true" v-model="endDate" placeholder="终止日期">
    </div>
    <div class="tips" v-text="tips"></div>
    <Calendar
      :value="value"
      @next="next"
      @prev="prev"
      clean
      range
      @select="select"
      ref="calendar"
      @selectMonth="selectMonth"
      @selectYear="selectYear"
    />
    <button :class="['submit', {'submit-active': startDate && endDate}]" @click="handleSubmit">确定</button>
  </div>
</template>

<script>
  import Calendar from 'mpvue-calendar'
  export default {
    data () {
      return {
        value: [],
        startDate: '',
        endDate: '',
        tips: '请选择一个日期为起始日期'
      }
    },
    components: {
      Calendar
    },
    methods: {
      selectMonth (month, year) {
        console.log(year, month)
      },
      prev (month) {
        console.log(month)
      },
      next (month) {
        console.log(month)
      },
      selectYear (year) {
        console.log(year)
      },
      setToday (val, val1, val2) {
        this.$refs.calendar.setToday()
      },
      select (val, val2) {
        console.log(val)
        console.log(val2)
      },
      handleSubmit () {
        if (!this.startDate) {
          this.tips = '请选择一个日期为起始日期'
        } else if (!this.endDate) {
          this.tips = '请选择一个日期为终止日期'
        }
      }
    },
    mounted () {
      // 默认选中今天
      this.setToday()
    }
  }
</script>

<style scoped lang="less">
  .form {
    margin: 30px auto 20px;
    width: 335px;
    height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    border-radius: 40px;
    input {
      text-align: center;
      color: #131313;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  .tips {
    color: #ffdb4b;
    text-align: center;
    font-size: 12px;
    margin-bottom: 15px;
  }
  .submit {
    margin-top: 20px;
    font-size: 16px;
    width: 278px;
    height: 48px;
    line-height: 48px;
    background-color: #ccc;
    color: #fff;
  }
  .submit-active {
    background-color: #ff6600;
  }
</style>
