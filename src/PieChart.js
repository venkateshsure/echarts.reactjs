// ChartComponent.js
import React, {useContext} from 'react';
import ReactEcharts from 'echarts-for-react';
import { ChartContext } from './context';


const PieChart = () => {
  const {chart} = useContext(ChartContext);
  
  const options = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left:'center',// left,center,right =>horizontally
      top:'top' //top,middle,bottom =>vertically
     
    },
    tooltip: {
      trigger: 'item', // item,axiss
      backgroundColor: 'orange',
      borderColor:'red',
      borderRadius:12, //tooltip radius
      borderWidth:2, //tooltip border width
      textStyle: {
        color: 'blck',
        fontSize: 12
      },

      formatter: '{a} <br/>{b}: {c} ({d}%)',


       position:'inside',
      // position: function (point, params, dom, rect, size) {
      //   // point[0] is the x coordinate, point[1] is the y coordinate
      //   return [point[0] + 10, point[1] + 10];
      // }

    },
    legend: {
      orient: 'vertical',// align horizontal or vertical possible values=>vertical,horizontal
      left: 'left', // Center horizontally ,possible values=>left,center,right
      top: 'center', // Place at the top of the chart,possible values=>top,center,bottoms
      type:'scroll',//plain,scroll
      selected: {
        'Search Engine': true,
        'Direct':  true// "Direct" is initially hidden
      }      
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '70%',
        // data: [
        //   { value: 1048, name: 'Search Engine' },
        //   { value: 735, name: 'Direct' },
        //   { value: 580, name: 'Email' },
        //   { value: 484, name: 'Union Ads' },
        //   { value: 300, name: 'Video Ads' }
        // ],
        data:chart,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetY: -10,
            shadowOffsetX:-10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  const onEvents={
    'mouseover':(params) =>{
     // console.log('mouse over:',params);
    },
    'click': (params) => {
      // console.log('Clicked on:', params);
  }
  }
  return <div> 
    <ReactEcharts option={options} onEvents={onEvents} style={{ height: '500px', width: '100%' }} />
  </div>
};

export default PieChart;
