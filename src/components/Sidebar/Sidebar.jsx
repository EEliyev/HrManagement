import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {ReactComponent as DashboardSvg}  from '../../svg/sidebar/dashboard.svg'
import {ReactComponent as MessageSvg}  from '../../svg/sidebar/message.svg'
import {ReactComponent as CalendarSvg}  from '../../svg/sidebar/calendar.svg'
import {ReactComponent as JobSvg}  from '../../svg/sidebar/job.svg'
import {ReactComponent as CandidatesSvg}  from '../../svg/sidebar/candidates.svg'
import {ReactComponent as CubeSvg}  from '../../svg/sidebar/cube.svg'
import {ReactComponent as CareerSvg}  from '../../svg/sidebar/career.svg'
import {ReactComponent as EmployeeSvg}  from '../../svg/sidebar/employee.svg'
import {ReactComponent as StructureSvg}  from '../../svg/sidebar/structure.svg'
import {ReactComponent as ReportSvg}  from '../../svg/sidebar/report.svg'
import {ReactComponent as SettingSvg}  from '../../svg/sidebar/setting.svg'
import {ReactComponent as Logo}  from '../../svg/sidebar/logo.svg'



import "./Sidebar.css";
function Sidebar() {

  var location= useLocation();
  const[selectedLink,setSelectedLink]=useState(null);

  var refLink= useRef();
  
  const data = [
    { title: "Menu", subtitle: [{icon:<DashboardSvg/>,link:"Dashboard"}, {icon:<MessageSvg/>,link:"Message"}, {icon:<CalendarSvg/>,link:"Calendar"}] },
    {
      title: "Recruitment",
      subtitle: [{icon:<JobSvg/>,link:"Jobs"}, {icon:<CandidatesSvg/>,link:"Candidates"}, {icon:<CubeSvg/>,link:"My Referals"}, {icon:<CareerSvg/>,link:"Career Site"}],
    },
    {
      title: "Organization",
      subtitle: [{icon:<EmployeeSvg />,link:"Employee"}, {icon:<StructureSvg/>,link:"Structure"}, {icon:<ReportSvg/>,link:"Report"}, {icon:<SettingSvg/>,link:"Settings"}],
    },
  ];
  // console.log(data)

  return (
    <div className="sidebar">
        <div className="sidebar-logo">
        <Logo/>
          <h3>Human R</h3>
        </div>
      <ul className="sidebar-bottom">
        {data?.map((x, i) => {
          return (
            <li key={i} className="sidebar-item">
              <p className="sidebar-item-title">{x.title}</p>
              <ul className="sidebar-item-bdoy">
                {x.subtitle?.map((a,index)=>{
                    return <li key={index}><Link  to={"/"+a?.link.toLowerCase()} onClick={()=>setSelectedLink(a.link)}  className={`sidebar-link ${selectedLink==a.link?"sidebar-link-active":""}`}>{a?.icon}<p style={{marginLeft:"0.5rem"}}>{a?.link}</p></Link></li>
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(Sidebar);
