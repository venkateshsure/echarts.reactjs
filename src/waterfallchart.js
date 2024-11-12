import React  from 'react';
import ReactECharts from 'echarts-for-react';

const WaterfallChart = () => {
  const data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
  const help = [];
  const positive = [];
  const negative = [];

  // Calculate help, positive, and negative arrays
  for (let i = 0, sum = 0; i < data.length; ++i) {
    if (data[i] >= 0) {
      positive.push(data[i]);
      negative.push('-');
    } else {
      positive.push('-');
      negative.push(-data[i]);
    }

    if (i === 0) {
      help.push(0);
    } else {
      sum += data[i - 1];
      help.push(data[i] < 0 ? sum + data[i] : sum);
    }
  }

  // Define ECharts options
  const options = {
    title: {
      text: 'Waterfall Chart'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: (function() {
        var list = [];
        for (var i = 1; i <= data.length; i++) {
          list.push('Oct/' + i);
        }
        return list;
      })()
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'bar',
        stack: 'all',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: help
      },
      {
        name: 'positive',
        type: 'bar',
        stack: 'all',
        data: positive
      },
      {
        name: 'negative',
        type: 'bar',
        stack: 'all',
        data: negative,
        itemStyle: {
          color: '#f33'
        }
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: 400, width: '100%' }} />;
};

export default WaterfallChart;
