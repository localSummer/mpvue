<template>
  <div class="date">
    <div class="form">
      <input type="text" disabled="true" v-model="startDate" placeholder="起始日期">
      <div class="arrow"></div>
      <input type="text" disabled="true" v-model="endDate" placeholder="终止日期">
    </div>
    <div class="tips" v-if="startDate === '' && endDate === ''" v-text="tips"></div>
    <div v-if="showCalendar">
      <Calendar
        :value="value"
        @prev="prev"
        @next="next"
        clean
        range
        @select="select"
        ref="calendar"
      />
    </div>
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
        tips: '',
        showCalendar: true
      }
    },
    components: {
      Calendar
    },
    methods: {
      setToday (val, val1, val2) {
        this.$refs.calendar.setToday()
      },
      prev (month) {
        let currentMonth = new Date().getMonth() + 1
        if (this.startDate === '' && currentMonth === month) {
          this.setToday()
        }
      },
      next (month) {
        let currentMonth = new Date().getMonth() + 1
        if (this.startDate === '' && currentMonth === month) {
          this.setToday()
        }
      },
      select (start, end) {
        let startDate = Object.assign([], start)
        let endDate = Object.assign([], end)
        startDate[1] += 1
        endDate[1] += 1
        if (startDate[1] < 10) {
          startDate[1] = '0' + startDate[1]
        }
        if (startDate[2] < 10) {
          startDate[2] = '0' + startDate[2]
        }
        if (endDate[1] < 10) {
          endDate[1] = '0' + endDate[1]
        }
        if (endDate[2] < 10) {
          endDate[2] = '0' + endDate[2]
        }
        this.startDate = startDate.join('-')
        this.endDate = endDate.join('-')
      },
      handleSubmit () {
        if (!this.startDate) {
          this.tips = '请选择一个日期为起始日期'
          return null
        } else if (!this.endDate) {
          this.tips = '请选择一个日期为终止日期'
          return null
        }
        this.$store.dispatch('updateSelectDate', {
          startDate: this.startDate,
          endDate: this.endDate
        })
        wx.navigateBack()
      }
    },
    onLoad () {
      this.showCalendar = true
    },
    mounted () {
      // 默认选中今天
      this.setToday()
    },
    onUnload () {
      this.showCalendar = false
      this.startDate = ''
      this.endDate = ''
      this.value = []
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
      width: 153px;
      color: #131313;
    }
    .arrow {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M170.667 469.333v85.334h512L448 789.333l60.587 60.587L846.507 512l-337.92-337.92L448 234.667l234.667 234.666h-512z' fill='%23666'/%3E%3C/svg%3E");
      background-size: cover;
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
