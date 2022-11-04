import moment from 'moment/moment'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './CalendarBar.css'

function CalendarBar({width}) {

    const [selectedItem,setSelectedItem]=useState(0);
    const times=["Day","Week","Mon","Year"]
    const category=[{name:"Interview",range:[1,6],bgcolor:"#FFDCD6",color:"#FE5631"},
                    {name:"Design Operation",range:[2,5],bgcolor:"#DDF6FD",color:"#56CCF2"},
                    {name:"Product Designer",range:[3,8],bgcolor:"#D6F5E6",color:"#39CB8A"},
                    {name:"UX Designer",range:[4,8.4],bgcolor:"#FFEDCD",color:"#FFA600"},
                    {name:"Graphic Designer",range:[5,9],bgcolor:"#D7E5FF",color:"#377DFF"}]

  return (
    <div className='calendarbar' style={{"--calendar-bar-width":`${width}%`}}>
        <div className="calendarbar-head">
            <div className="calendarbar-head-title">{moment().format("ll")}</div>
            <div className="calendarbar-head-select">
                {times.map((x,i)=>{
                    return <div key={uuid()} onClick={()=>setSelectedItem(i)} className={`calendarbar-head-select-opt ${selectedItem==i?"calendarbar-head-select-opt-active":""} `}>{x}</div>
                })}
            </div>
        </div>
        <div className="calendarbar-body">
            <div className="calendarbar-body-left">
                {category.map((x,i)=>{
                    return<div key={uuid()} className="calendarbar-body-left-item">{x.name}</div>
                })}
                <div className="calendarbar-body-left-footer"></div>
            </div>
            <div className="calendarbar-body-right">
                {category.map((x)=>{
                    return <div key={uuid()} className="calendarbar-body-right-item">
                                <div className="calendarbar-body-right-item-bar" style={{marginLeft:`${(x.range[0]-1)*100/9}%`,width:`${(x.range[1]-x.range[0])*100/9}%`,backgroundColor:`${x.bgcolor}`,color:`${x.color}`,borderLeft:`3px solid ${x.color}`}}>
                                    <div className="calendarbar-body-right-item-bar-before">{x.range[0]}PM</div> 
                                    <div>{`About ${x.range[1]-x.range[0]} hours`}</div>
                                    <div className="calendarbar-body-right-item-bar-after" >{x.range[1]}PM</div>
                                </div>
                            </div>
                })}
                <div className="calendarbar-body-right-footer">
                    <div>1PM</div>
                    <div>2PM</div>
                    <div>3PM</div>
                    <div>4PM</div>
                    <div>5PM</div>
                    <div>6PM</div>
                    <div>7PM</div>
                    <div>8PM</div>
                    <div>9PM</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(CalendarBar)