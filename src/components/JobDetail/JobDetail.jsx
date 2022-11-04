import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LeftSvg } from "../../svg/job/left.svg";
import UserPng from "../../img/userphoto.png";

import "./JobDetail.css";
import { Rating, Typography } from "@mui/material";

function JobDetail() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate=useNavigate();

  const data = location.state.data[0];
  
console.log("jobdetail")
  return (
    <div className="jobdetail">
      <div className="container-title">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="jobdetail-left" onClick={()=>navigate("/jobs")}>
            <LeftSvg />
          </div>
          <div className="jobdetail-med">
            <div className="jobdetail-job">{data.job}</div>
            <div className="jobdetail-pos">{data.pos}</div>
            <div className="jobdetail-link">google.az</div>
          </div>
        </div>
        <div className="jobdetail-right">
          <div className="jobdetail-right-pipebtn">Pipeline View</div>
          <div className="jobdetail-right-tablebtn">Table View</div>
        </div>
      </div>
      <div className="job-container">
      <div className="job-container-head">
        <div className={`job-container-head-item ${selectedTab == 0 ? "job-container-head-item-active" : ""}`} onClick={() => setSelectedTab(0)}>
          Candidates
        </div>
        <div className={`job-container-head-item ${selectedTab == 1 ? "job-container-head-item-active" : ""}`} onClick={() => setSelectedTab(1)}>
          Jobdetail Details
        </div>
        <div className={`job-container-head-item ${selectedTab == 2 ? "job-container-head-item-active" : ""}`} onClick={() => setSelectedTab(2)}>
          Timeline & Notes
        </div>
        <div className={`job-container-head-item ${selectedTab == 3 ? "job-container-head-item-active" : ""}`} onClick={() => setSelectedTab(3)}>
          Hiring Team
        </div>
        <div className={`job-container-head-item ${selectedTab == 4 ? "job-container-head-item-active" : ""}`} onClick={() => setSelectedTab(4)}>
          Settings
        </div>
      </div>
      <div className="jobdetail-container-body">
        <div className="jobdetail-container-body-table">
          <div className="jobdetail-container-body-table-head">
            <div className="jobdetail-container-body-table-head-top"></div>
            <div className="jobdetail-container-body-table-head-foot">
            <div className="jobdetail-container-body-table-head-name">New Applied</div>
            <div className="jobdetail-container-body-table-head-count">{data.candidates.filter(x=>x.status=="new").length}</div>
            </div>

          </div>
          {data.candidates.filter(x=>x.status=="new")?.map((x,i)=>{
            return <div key={i} className="jobdetail-container-body-table-item">
            <div className="jobdetail-container-body-table-item-head">
              <div className="jobdetail-container-body-table-item-head-logo">
                <img src={UserPng} alt="" />
              </div>
              <div className="jobdetail-container-body-table-item-head-title">
                <div className="jobdetail-container-body-table-item-head-title-top">Jane Cooper</div>
                <div className="jobdetail-container-body-table-item-head-title-foot">UI/UX</div>
              </div>
            </div>
            <div className="jobdetail-container-body-table-item-body">
            <Rating style={{fontSize:"1rem"}} name="simple-controlled" value={x.rate}/>
            2 days ago
            </div>
          </div>
          })}
        </div>


        <div className="jobdetail-container-body-table">
          <div className="jobdetail-container-body-table-head">
            <div className="jobdetail-container-body-table-head-top" style={{borderColor:"#56CCF2"}}></div>
            <div className="jobdetail-container-body-table-head-foot">
            <div className="jobdetail-container-body-table-head-name">Shortlisted</div>
            <div className="jobdetail-container-body-table-head-count">{data.candidates.filter(x=>x.status=="shortlist").length}</div>
            </div>

          </div>
          {data.candidates.filter(x=>x.status=="shortlist")?.map((x,i)=>{
            return <div key={i} className="jobdetail-container-body-table-item">
            <div className="jobdetail-container-body-table-item-head">
              <div className="jobdetail-container-body-table-item-head-logo">
                <img src={UserPng} alt="" />
              </div>
              <div className="jobdetail-container-body-table-item-head-title">
                <div className="jobdetail-container-body-table-item-head-title-top">Jane Cooper</div>
                <div className="jobdetail-container-body-table-item-head-title-foot">UI/UX</div>
              </div>
            </div>
            <div className="jobdetail-container-body-table-item-body">
            <Rating style={{fontSize:"1rem"}} name="simple-controlled" value={x.rate}/>
            2 days ago
            </div>
          </div>
          })}
        </div>


        <div className="jobdetail-container-body-table">
          <div className="jobdetail-container-body-table-head">
            <div className="jobdetail-container-body-table-head-top" style={{borderColor:"#FF5531"}}></div>
            <div className="jobdetail-container-body-table-head-foot">
            <div className="jobdetail-container-body-table-head-name">Interview</div>
            <div className="jobdetail-container-body-table-head-count">{data.candidates.filter(x=>x.status=="interview").length}</div>
            </div>

          </div>
          {data.candidates.filter(x=>x.status=="interview")?.map((x,i)=>{
            return <div key={i} className="jobdetail-container-body-table-item">
            <div className="jobdetail-container-body-table-item-head">
              <div className="jobdetail-container-body-table-item-head-logo">
                <img src={UserPng} alt="" />
              </div>
              <div className="jobdetail-container-body-table-item-head-title">
                <div className="jobdetail-container-body-table-item-head-title-top">Jane Cooper</div>
                <div className="jobdetail-container-body-table-item-head-title-foot">UI/UX</div>
              </div>
            </div>
            <div className="jobdetail-container-body-table-item-body">
            <Rating style={{fontSize:"1rem"}} name="simple-controlled" value={x.rate}/>
            2 days ago
            </div>
          </div>
          })}
        </div>

        <div className="jobdetail-container-body-table">
          <div className="jobdetail-container-body-table-head">
            <div className="jobdetail-container-body-table-head-top" style={{borderColor:"#377DFF"}}></div>
            <div className="jobdetail-container-body-table-head-foot">
            <div className="jobdetail-container-body-table-head-name">Test</div>
            <div className="jobdetail-container-body-table-head-count">{data.candidates.filter(x=>x.status=="test").length}</div>
            </div>
          </div>
          {data.candidates.filter(x=>x.status=="test")?.map((x,i)=>{
            return <div key={i} className="jobdetail-container-body-table-item">
            <div className="jobdetail-container-body-table-item-head">
              <div className="jobdetail-container-body-table-item-head-logo">
                <img src={UserPng} alt="" />
              </div>
              <div className="jobdetail-container-body-table-item-head-title">
                <div className="jobdetail-container-body-table-item-head-title-top">Jane Cooper</div>
                <div className="jobdetail-container-body-table-item-head-title-foot">UI/UX</div>
              </div>
            </div>
            <div className="jobdetail-container-body-table-item-body">
            <Rating style={{fontSize:"1rem"}} name="simple-controlled" value={x.rate}/>
            2 days ago
            </div>
          </div>
          })}
        </div>

        <div className="jobdetail-container-body-table">
          <div className="jobdetail-container-body-table-head">
            <div className="jobdetail-container-body-table-head-top" style={{borderColor:"#39CB8A"}}></div>
            <div className="jobdetail-container-body-table-head-foot">
            <div className="jobdetail-container-body-table-head-name">Hired</div>
            <div className="jobdetail-container-body-table-head-count">{data.candidates.filter(x=>x.status=="hired").length}</div>
            </div>
          </div>
          {data.candidates.filter(x=>x.status=="hired")?.map((x,i)=>{
            return <div key={i} className="jobdetail-container-body-table-item">
            <div className="jobdetail-container-body-table-item-head">
              <div className="jobdetail-container-body-table-item-head-logo">
                <img src={UserPng} alt="" />
              </div>
              <div className="jobdetail-container-body-table-item-head-title">
                <div className="jobdetail-container-body-table-item-head-title-top">Jane Cooper</div>
                <div className="jobdetail-container-body-table-item-head-title-foot">UI/UX</div>
              </div>
            </div>
            <div className="jobdetail-container-body-table-item-body">
            <Rating style={{fontSize:"1rem"}} name="simple-controlled" value={x.rate}/>
            2 days ago
            </div>
          </div>
          })}
        </div>
        
      </div>
      </div>

    </div>
  );
}

export default React.memo(JobDetail);
