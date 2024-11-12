import {useState,createContext} from 'react';

const ChartContext = createContext();

const ChartProvider=({children})=>{
    const [chart,setChart] = useState([]);
    return (
        <ChartContext.Provider value={{chart,setChart}}>
            {children}
        </ChartContext.Provider>
    )
}

export {ChartContext , ChartProvider};