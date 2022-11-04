import { color } from '@mui/system';
import React from 'react'
import Chart from 'react-apexcharts';
import './Dashboard.css'

 
function ChartBar({width}) {
   
  return (
    <Chart
    type="bar"
    width={"100%"}
    height={300}
    series={[
      // {name:"Total",data:[70,70,2,5,5,5,8,8,5,8,5],color:"#56CCF2"},
      {name:"Short",data:[30,70,28,54,89,58,80,74,55,82,65,78],color:"#38CA89"},
      {name:"Reject",data:[10,15,2,14,11,10,14,18,18,17,19,18],color:"#FFA600"}
    ]}
    options={{
      title:{
        text:"Statistics of active Applications",
      },
      chart:{
        
        stacked:true,
        animations:{
          enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
        }
      },
      dataLabels:{
        enabled:false
      },
      yaxis:{
        tickAmount:4,
        min:0,
        max:100
      },
      xaxis:{
        categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
      },
      legend:{
        position:"top",
        offsetY:-35,
        offsetX:400,
      },
      plotOptions:{
        bar:{
          columnWidth:20,
          borderRadius:5,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
                color:"#56CCF2"
              }
            }}
          
        }
      }
    }}
    />
  )
}

export default React.memo(ChartBar)