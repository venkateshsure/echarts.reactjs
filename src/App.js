import {useState,useEffect,useContext} from 'react';

import LineChart from './LineChart';

import PieChart from './PieChart';

import BarChart from './BarChart';
import WaterfallChart from './waterfallchart'
import StackedChart from './stackedchart';

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

import './App.css';
import { ChartContext } from './context';

import axios from 'axios';
import BarChart1 from './BarChart1';

const App=()=>{
  const [option,setOption]=useState("pieChart");
  const {setChart} = useContext(ChartContext);
  
  const handleChange=(e)=>{
        setOption(e.target.value);
  }

  useEffect(()=>{
    const getCharts=async()=>{
        try{
          const response = await axios.get('http://localhost:4000/echart');
          setChart(response.data);
        }
        catch(error){
          console.log(error);
        }
    }

    getCharts()
  },[]);

  return (
    <div className='con'>
      <div className='fir-con'>
        <FormControl>
            <InputLabel id="select">Select an option</InputLabel>
            <Select labelId="select" label="choose an option" value={option} onChange={handleChange}>
                <MenuItem value="lineChart">Line Chart</MenuItem>
                <MenuItem value="pieChart">Pie Chart</MenuItem>
                <MenuItem value="barChart">Bar Chart</MenuItem>
                <MenuItem value="barchart1">Bar Chart1</MenuItem>
                <MenuItem value="waterfallChart">WaterFall Chart</MenuItem>
                <MenuItem value="stackedChart">Stacked Chart</MenuItem>
            </Select>
            <FormHelperText>Please select an Option</FormHelperText>
        </FormControl>
      </div>
      <div className="sec-con" style={{width:"100%"}}>
          {option==="lineChart" && (<div>
            <h1>Line Chart</h1>
            <LineChart/>
          </div>)}
          {option==="pieChart" && (<div>
              <h1>Pie Chart</h1>
              <PieChart/>
          </div>)}
          {option==="barChart" && (<div>
              <h1>Bar Chart</h1>
              <BarChart />
          </div>)}
          {
            option==="waterfallChart" && (
              <div>
                <h1>Waterfall Chart</h1>
                <WaterfallChart/>
            </div>)
          }
          {
            option==='stackedChart' && (
              <div>
                <h1>Stacked Chart</h1>
                <StackedChart />
              </div>
            )
          }
          {
            option==="barchart1" && (
              <div>
                <h1>Barchart1</h1>
                <BarChart1 />
              </div>
            )
          }
      </div>
    </div>
  )
}

export default App;