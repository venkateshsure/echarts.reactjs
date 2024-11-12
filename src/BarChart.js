 import React, { useRef,useContext } from 'react';
 import ReactEcharts from 'echarts-for-react';
 import * as echarts from 'echarts';
import { ChartContext } from './context';
 
 const BarChart = () => {
   const chartRef = useRef(null);
  const {chart} = useContext(ChartContext);
  // console.log("chart------------",chart,"chart----------");
  let dataAxis = chart.map(each=>(each.name));
  let data= chart.map(each=>(each.value));
  console.log(data,dataAxis);
  // let dataAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
   
    // let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    const zoomSize = 6;
 
   const getOptions = {
     title: {
       text: 'Alphabets Data',
       subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
     },
     xAxis: {
       data: dataAxis,
       axisLabel: { inside: true, color: '#fff' },
       axisTick: { show: false },
       axisLine: { show: false },
       z: 10,
     },
     yAxis: {
       axisLine: { show: false },
       axisTick: { show: false },
       axisLabel: { color: '' },
     },
     dataZoom: [
       {
         type: 'inside',
       },
     ],
     series: [
       {
         type: 'bar',
         showBackground: false,
         itemStyle: {
           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
             { offset: 0, color: '#83bff6' },
             { offset: 0.5, color: '#188df0' },
             { offset: 1, color: '#188df0' },
           ]),
         },
         emphasis: {
           itemStyle: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
               { offset: 0, color: 'orange' },
               { offset: 0.7, color: '#83bff6' },
               { offset: 1, color: '#83bff6' },
             ]),
           },
         },
         data: data,
       },
     ],
   };
 
   // Click event to enable data zoom on bar click
   const onChartClick = (params) => {
     // Check if chartRef and its current instance are available
     const chartInstance = chartRef.current?.getEchartsInstance();
     if (chartInstance) {
        console.log("--------------------",chartInstance)
       chartInstance.dispatchAction({
         type: 'dataZoom',
         startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
         endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
       });
     }
   };
 
   return (
     <ReactEcharts
       ref={chartRef}
       option={getOptions}
       style={{ height: '400px', width: '100%' }}
       onEvents={{
         click: onChartClick,
       }}
     />
   );
 };
 
 export default BarChart;
 