/**
 * Created by wxw on 18-7-18.
 */
export default {
  getSelectDate: state => {
    let startDate = state.selectDate.startDate.split('-')
    let endDate = state.selectDate.endDate.split('-')
    let date = startDate.join('-') + '~' + endDate.join('-')
    return date
  }
}
