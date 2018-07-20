<template>
  <div>
    <Calendar
      :months="months"
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
    <button @click="setToday">返回今日</button>
  </div>
</template>

<script>
  import Calendar from 'mpvue-calendar'
  export default {
    data () {
      return {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        disabledarr: ['2018-6-27', '2018-6-25'],
        value: [[2018, 6, 21], [2018, 6, 28]],
        begin: [2016, 1, 1],
        end: [2020, 1, 1]
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
      }
    }
  }
</script>

<style scoped>

</style>
