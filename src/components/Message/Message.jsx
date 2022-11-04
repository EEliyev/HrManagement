import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { ReactComponent as FilterSvg } from '../../svg/message/filter.svg'
import { ReactComponent as VideoSvg } from '../../svg/message/video.svg'
import { ReactComponent as DotsSvg } from '../../svg/message/dots.svg'
import { ReactComponent as SendSvg } from '../../svg/message/send.svg'
import  UserPng  from '../../img/user.png';
import UserVideo from "../../img/uservideo.png";
import UserLink from '../../img/userlink.png'
import './Message.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from '@mui/material';
import { flexbox } from '@mui/system';

function Message() {
  const message=[{
    name:"Thomas Fletcher",
    job:"Senior UI Designer",
    position:"Team Leader",
    message:[{item:"Hey Thomas could you Free now, Can you look and read the brief first",who:0},
            {item:"Hi , First thanks for your interesting",who:1}],
  },
  {
    name:"Thomas Fletcher2",
    job:"Senior UI Designer",
    position:"Team Leader",
    message:[{item:"Hey Thomas could you Free now, Can you look and read the brief first",who:0},
            {item:"Hi , First thanks for your interesting",who:1},
            {item:"Hey Thomas could you Free now, Can you look and read the brief first",who:0},
            {item:"Hi , First thanks for your interesting",who:1}],
  },
  {
    name:"Thomas Fletcher3",
    job:"Senior UI Designer",
    position:"Team Leader",
    message:[{item:"Hey Thomas could you Free now, Can you look and read the brief first",who:0},
            {item:"Hi , First thanks for your interesting",who:1}],
  },
  {
    name:"Thomas Fletcher4",
    job:"Senior UI Designer",
    position:"Team Leader",
    message:[{item:"Hey Thomas could you Free now, Can you look and read the brief first",who:0},
            {item:"Hi , First thanks for your interesting",who:1}],
  },
  {
    name:"Thomas Fletcher5",
    job:"Senior UI Designer",
    position:"Team Leader",
    message:[{item:"Hey Thomas could you Free now, Can you look and read the brief first",who:0},
            {item:"Hi , First thanks for your interesting",who:1}],
  }]

  const [messagebox,setMessagebox]=useState(message[0]);
  const[ selectItem,setSelectedItem]=useState(message[0].name);
  const [filteredData,setFilteredData]=useState(message)
  const [activeVideo,setActiveVideo]= useState(false);

  const [currentDuraion,setCurrentDuration]=useState(0);
  const [maxDuration,setMaxDuration]=useState(200);

  const refCard=useRef();
  const refBodyinner=useRef();

 


  function selectCard(i){
    setSelectedItem(i)
    var data= message.filter(x=>x.name==i)
    console.log(data[0])
    setMessagebox(data[0])

  }
  function Search(e){
    setFilteredData(message.filter(x=>x.name.toLowerCase().includes(e)))
    
  }
  
  useEffect(() => {
    refBodyinner.current.scrollTop=refBodyinner.current.scrollHeight;
    
  }, [messagebox])

  function onClickVideo(){
    if(activeVideo==true){
      setActiveVideo(false)
    }else{
      setActiveVideo(true)
    }
  }
  var num=0
  var interval=null;

  function runTimer(){
  interval = setInterval(() => {
      if(num<maxDuration){
        num+=1;
        setCurrentDuration(num);
      }
    }, 500);
  }
  useEffect(() => {
    if(activeVideo){
      runTimer()
    }

    return () => clearInterval(interval);
  }, [activeVideo]);
  return (
    <div className='message'>
      <h2 className='container-title'>Message</h2>
      <div className="message-container">
        <div className={`${activeVideo?"message-left":"message-left-wide"}`}>
          <div className="message-left-item">
            <div className="message-left-item-title">
              <button className='message-left-item-btn-active'>Recriuitment Inbox</button>
              <button className='message-left-item-btn' style={{backgroundColor:"none"}}>Work Inbox</button>
            </div>
            <div className="message-left-item-search">
                <input type="text"  placeholder='Search' onChange={(e)=>Search(e.target.value)}/>
                <div><FilterSvg/></div>
            </div>
            <div className="message-left-item-container">
            {filteredData?.map((x,i)=>{
              return <div ref={refCard} key={i} id={i} className={`message-left-item-card ${x.name==selectItem?"msactive":""}`} onClick={()=>selectCard(x.name)}>
                      <div className="message-left-item-logo"><img width={"50px"}  src={UserPng} alt="" /></div>
                      <div className="message-left-item-card-title">
                        <div className="mlict-head">{x.name}</div>
                        <div className="mlict-body">Job: {x.position}</div>
                      </div>
                      <div className="message-left-item-card-date">{new Date().getUTCHours()+":"+new Date().getUTCMinutes()}</div>
                    </div>
            })}
            </div>
          </div>
          <div className="message-left-body">
            <div className="message-left-body-head">
              <div className="message-left-body-logo"><img width={"50px"}  src={UserPng} alt="" /></div>
              <div className="message-left-body-title">
                <h4>{messagebox?.name}</h4>
                <p style={{opacity:"0.5", fontSize:"0.8rem"}}>{messagebox?.job}</p>
              </div>
              <div className="message-left-body-btn">
                <button  onClick={()=>onClickVideo()}><VideoSvg/></button>
                <button><DotsSvg/></button>
              </div>
            </div>
            <div className="message-left-body-main">
              <div className="message-left-body-inner" ref={refBodyinner}>
                {messagebox?.message?.map((x,i)=>{
                  return <div key={i} className="message-left-body-inner-message" style={{transform:`${x?.who==0?"scaleX(-1)":""}`}}>
                      <div className="message-left-body-inner-message-logo"><img width={"20px"} src={UserPng} alt="" /></div>
                        <div className="message-left-body-inner-message-text" style={{transform:`${x?.who==0?"scaleX(-1)":""}`,backgroundColor:`${x?.who!=0?"#EFEFEF":"#D6F5E6"}`}}>
                          {x?.item}
                        </div>
                  </div>
                })}
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <Link style={{color:"#377DFF",fontSize:"0.8rem"}}>Notify Anyway</Link>
              </div>

            </div>
            <div className="message-left-body-footer">
                <input type="text" placeholder='Your message'/>
                <button><SendSvg/></button>
              </div>
          </div>
        </div>
        <div className={`${activeVideo?"message-right":"message-right-none"}`}>
          <div className='message-right-inner' style={{display:`${activeVideo?"flex":"none"}`}}>
           <div > <img src={UserVideo} alt="" /></div>
          <Slider
          size="Default"
          defaultValue={0}
          min={0}
          max={maxDuration}
          value={currentDuraion}
          aria-label="Default"
          disableSwap={true}
          
        />
        <span style={{color:"#377DFF",fontSize:"0.8rem",marginLeft:`${((currentDuraion/maxDuration*100)<90?currentDuraion/maxDuration*100:90)-4}%`}}>{parseInt(currentDuraion/60)}:{((currentDuraion%60)/10)>=1?currentDuraion%60:"0"+currentDuraion%60}</span>
        <div className="message-right-description">Job Description</div>

        <Link className="message-right-link">
          <div style={{width:"45px",height:"45px"}}><img  src={UserLink} alt="" /></div>
          <div style={{display:"flex",flexDirection:"column", justifyContent:"center",marginLeft:"1rem"}}>
            <h4>{messagebox.job}</h4>
            <p style={{opacity:"0.5"}}>google.com</p></div>
        </Link>
        <p style={{fontSize:"0.8rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, maiores itaque neque fugit hic consequuntur.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Message)