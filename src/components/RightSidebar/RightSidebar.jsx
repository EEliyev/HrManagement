import React, { useEffect, useRef, useState } from "react";
import "./RightSidebar.css";
import { ReactComponent as QuestionSvg } from "../../svg/nav/question.svg";
import { ReactComponent as BellSvg } from "../../svg/nav/bell.svg";
import { ReactComponent as SearchSvg } from "../../svg/nav/search.svg";
import { ReactComponent as Theme } from "../../svg/theme.svg";
import Userpng from '../../img/userphoto.png'

function RightSidebar({ active, setRightSidebar }) {

  const refsidebar = useRef();
  const refTheme = useRef();
  useEffect(() => {
    refsidebar.current.scroll(0, 0)
  }, [active])

  function changeTheme() {

    const white = "--body-color: #F5F6FA;--body-color-light:white;--theme-color:#26273B;--body-border:#E8E8E8;--link-color:black;--grey: rgba(0, 0, 0, 0.425);--input - bg - color: #FAFBFD;--blue:#377DFF;--activity - status: #D7E5FF;--black - grey: black;--candidates - count: #D6F5E6; ";
    const dark=" --body-color:#1B1C31;--body-color-light:#26273B;--theme-color:white;--body-border:#1B1C31;--link-color:white;--grey: rgba(255, 255, 255, 0.425);--input-bg-color:#2E2F44;--blue:#377DFF;--activity-status:#263560;--black-grey:grey;--candidates-count:#414755;"
    
    if(localStorage.getItem("themeLs")=="white"){
      window.document.body.style=dark;
      localStorage.setItem("themeLs","dark")
    }
    else{
      window.document.body.style=white;
      localStorage.setItem("themeLs","white")
    }
  }

  return (
    <>
      <div
        className={`right-sidebar ${active ? "" : "right-sidebar-hide"}`}
        onClick={() => setRightSidebar(false)}
      ></div>
      <div ref={refsidebar}
        className={`${active ? "right-sidebar-inner " : "right-sidebar-inner-hide"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div ref={refTheme} className="theme" onClick={() => changeTheme()}><Theme /></div>
          <div className="right-sidebar-nav">
            <div className="nav-user-item">
              <QuestionSvg />
            </div>
            <div className="nav-user-item">
              <BellSvg />
            </div>
            <div id="circle" className="nav-user-item"><img src={Userpng} alt="" /></div>
          </div>
        </div>
        <div className="right-sidebar-head">
          <div className="right-sidebar-head-icon"><img src={Userpng} alt="" /></div>
          <div className="right-sidebar-head-name">Thomas Shelby</div>
          <div className="right-sidebar-head-pos">Director of Rescruitment</div>
        </div>
        <div className="right-sidebar-items">
          <div className="right-sidebar-title"> Messages</div>
          <div className="right-sidebar-item">
            <div className="right-sidebar-item-logo"><img src={Userpng} alt="" /></div>
            <div className="right-sidebar-item-body">
              <div className="right-sidebar-item-body-title">Cameron Williamson</div>
              <div className="right-sidebar-item-body-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nulla.</div>
            </div>
          </div>
          <div className="right-sidebar-item">
            <div className="right-sidebar-item-logo"><img src={Userpng} alt="" /></div>
            <div className="right-sidebar-item-body">
              <div className="right-sidebar-item-body-title">Jacob Jones</div>
              <div className="right-sidebar-item-body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eius.</div>
            </div>
          </div>

        </div>
        <div className="right-sidebar-items">
          <div className="right-sidebar-title"> Recent Added Jobs</div>
          <div className="right-sidebar-item">
            <div className="right-sidebar-item-logo"><img src={Userpng} alt="" /></div>
            <div className="right-sidebar-item-body">
              <div className="right-sidebar-item-body-title">Cameron Williamson</div>
              <div className="right-sidebar-item-body-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nulla.</div>
            </div>
          </div>
          <div className="right-sidebar-item">
            <div className="right-sidebar-item-logo"><img src={Userpng} alt="" /></div>
            <div className="right-sidebar-item-body">
              <div className="right-sidebar-item-body-title">Jacob Jones</div>
              <div className="right-sidebar-item-body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eius.</div>
            </div>
          </div>
          <div className="right-sidebar-title"> Recent Added Jobs</div>
          <div className="right-sidebar-item">
            <div className="right-sidebar-item-logo"><img src={Userpng} alt="" /></div>
            <div className="right-sidebar-item-body">
              <div className="right-sidebar-item-body-title">Cameron Williamson</div>
              <div className="right-sidebar-item-body-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nulla.</div>
            </div>
          </div>
          <div className="right-sidebar-item">
            <div className="right-sidebar-item-logo"><img src={Userpng} alt="" /></div>
            <div className="right-sidebar-item-body">
              <div className="right-sidebar-item-body-title">Jacob Jones</div>
              <div className="right-sidebar-item-body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eius.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(RightSidebar);
