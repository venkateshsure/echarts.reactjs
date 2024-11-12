import ReactEcharts from 'echarts-for-react';

const StackedChart=()=>{

    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'  // 'shadow' works well for stacked bar charts
            },
            // formatter:'{a} {b}: {c}'
          },
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'bar',
            stack: 'x'
          },
          {
            data: [1, 2, 2, 4, 4],
            type: 'bar',
            stack: 'x'
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'bar',
            stack: 'x'
          }
        ]
      };
      return (
        <ReactEcharts option={options} style={{ height: '500px', width: '100%' }}/>
      )
}

export default StackedChart;