function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function getWelcomeTime () {
  let hours = new Date().getHours()
  if (hours < 6) {
    return '凌晨好'
  } else if (hours < 9) {
    return '早上好'
  } else if (hours < 12) {
    return '上午好'
  } else if (hours < 14) {
    return '中午好'
  } else if (hours < 17) {
    return '下午好'
  } else if (hours < 19) {
    return '傍晚好'
  } else if (hours < 22) {
    return '晚上好'
  } else {
    return '深夜好'
  }
}

export default {
  formatNumber,
  formatTime
}
