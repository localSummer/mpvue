/**
 * Created by wxw on 18-7-18.
 */

export const dataSummary = function (plantCap) {
  let datalist = [{
    offset: [50, 68],
    symbolSize: 120,
    color: '#f90',
    fontSize: 16
  }, {
    offset: [18, 90],
    symbolSize: 60,
    color: '#fc0',
    fontSize: 11
  }, {
    offset: [13, 40],
    symbolSize: 70,
    color: '#fc0',
    fontSize: 12
  }, {
    offset: [75, 20],
    symbolSize: 75,
    color: '#fc0',
    fontSize: 12
  }, {
    offset: [40, 15],
    symbolSize: 75,
    color: '#fc0',
    fontSize: 12
  }, {
    offset: [83, 88],
    symbolSize: 80,
    color: '#fc0',
    fontSize: 12
  }]
  let emptyDataList = [
    {
      value: [33, 95],
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: '#fc0'
        }
      }
    },
    {
      value: [25, 65],
      symbolSize: 25,
      itemStyle: {
        normal: {
          color: '#fc0'
        }
      }
    },
    {
      value: [28, 35],
      symbolSize: 20,
      itemStyle: {
        normal: {
          color: '#fc0'
        }
      }
    },
    {
      value: [58, 20],
      symbolSize: 20,
      itemStyle: {
        normal: {
          color: '#fc0'
        }
      }
    },
    {
      value: [90, 43],
      symbolSize: 30,
      itemStyle: {
        normal: {
          color: '#fc0'
        }
      }
    },
    {
      value: [95, 23],
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: '#fc0'
        }
      }
    }
  ]
  let datas = []
  for (let i = 0; i < plantCap.length; i++) {
    let item = plantCap[i]
    let itemToStyle = datalist[i]
    datas.push({
      name: item.name + '\n\n' + item.value,
      value: itemToStyle.offset,
      symbolSize: itemToStyle.symbolSize,
      label: {
        normal: {
          textStyle: {
            fontSize: itemToStyle.fontSize,
            color: '#000',
            fontWeight: 'bold'
          }
        }
      },
      itemStyle: {
        normal: {
          color: itemToStyle.color
        }
      }
    })
  }
  datas = datas.concat(emptyDataList)
  return {
    title: {
      text: '数据总览',
      left: 'center',
      textStyle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15
      }
    },
    grid: {
      show: false,
      top: 40,
      left: 10,
      right: 10,
      bottom: 10
    },
    xAxis: [{
      gridIndex: 0,
      type: 'value',
      show: false,
      min: 0,
      max: 100,
      nameLocation: 'middle',
      nameGap: 5
    }],
    yAxis: [{
      gridIndex: 0,
      min: 0,
      show: false,
      max: 100,
      nameLocation: 'middle',
      nameGap: 30
    }],
    series: [{
      name: 'summary',
      type: 'scatter',
      symbol: 'circle',
      silent: true,
      label: {
        normal: {
          show: true,
          formatter: '{b}',
          color: '#fff',
          textStyle: {
            fontSize: '15'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#00acea'
        }
      },
      data: datas
    }]
  }
}

export const frequencyTrend = function (options) {
  return {
    title: {
      text: options.title,
      left: 'center',
      textStyle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15
      }
    },
    grid: {
      left: '15%',
      top: '15%',
      right: '15%',
      bottom: 70
    },
    xAxis: {
      type: 'category',
      name: '日期',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      data: options.date
    },
    yAxis: {
      type: 'value',
      name: '次',
      splitLine: {show: false},
      axisTick: {
        show: false
      }
    },
    series: [{
      name: 'trend',
      type: 'line',
      data: options.data
    }]
  }
}

export const timeAnalysis = {
  title: {
    text: '使用时长分析',
    left: 'center',
    textStyle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 15
    }
  },
  grid: {
    left: '15%',
    top: '18%',
    right: '15%',
    bottom: 70
  },
  xAxis: {
    name: '次数',
    type: 'value',
    boundaryGap: [0, 0.01],
    splitLine: {show: false},
    axisTick: {
      show: false
    }
  },
  yAxis: {
    name: '分钟',
    type: 'category',
    data: ['0-5', '6-30', '31-60', '>60'],
    splitLine: {show: false},
    axisTick: {
      show: false
    }
  },
  series: [{
    type: 'bar',
    label: {
      normal: {
        show: true,
        // formatter: '{c}',
        formatter: function (v) {
          var val = v.data
          return val
        },
        color: '#fff'
      }
    },
    itemStyle: {
      normal: {
        color: function (params) {
          var colorList = ['#ffce55', '#ec87bf', '#48cfae', '#fb6e52']
          return colorList[params.dataIndex]
        }
      }
    },
    data: [22, 33, 44, 55]
  }]
}

export const trainScore = {
  title: {
    text: '培训成绩分析',
    left: 'center',
    textStyle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 15
    }
  },
  grid: {
    left: '15%',
    top: '18%',
    right: '15%',
    bottom: 70
  },
  xAxis: {
    name: '人数',
    type: 'value',
    boundaryGap: [0, 0.01],
    splitLine: {show: false},
    axisTick: {
      show: false
    }
  },
  yAxis: {
    name: '分',
    type: 'category',
    data: ['0-59', '60-85', '>85'],
    splitLine: {show: false},
    axisTick: {
      show: false
    }
  },
  series: [{
    type: 'bar',
    label: {
      normal: {
        show: true,
        // formatter: '{c}',
        formatter: function (v) {
          var val = v.data
          return val
        },
        color: '#fff'
      }
    },
    itemStyle: {
      normal: {
        color: function (params) {
          var colorList = ['#ffce55', '#ec87bf', '#48cfae', '#fb6e52']
          return colorList[params.dataIndex]
        }
      }
    },
    data: [280, 213, 297]
  }]
}

export const testChart = {
  title: {
    text: '使用次数趋势图',
    left: 'center',
    textStyle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 15
    }
  },
  grid: {
    left: '15%',
    top: '15%',
    right: '15%',
    bottom: 70
  },
  xAxis: {
    type: 'category',
    name: '日期',
    boundaryGap: false,
    axisTick: {
      show: false
    },
    data: ['17/10', '11', '12', '18/01', '02', '03', '04']
  },
  yAxis: {
    type: 'value',
    name: '次',
    splitLine: {show: false},
    axisTick: {
      show: false
    }
  },
  series: [{
    name: 'trend',
    type: 'line',
    data: [820, 932, 901, 934, 1290, 800, 500]
  }]
}
