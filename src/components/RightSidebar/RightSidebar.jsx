import React, { useEffect, useRef, useState } from "react";
import "./RightSidebar.css";
import { ReactComponent as QuestionSvg } from "../../svg/nav/question.svg";
import { ReactComponent as BellSvg } from "../../svg/nav/bell.svg";
import { ReactComponent as SearchSvg } from "../../svg/nav/search.svg";
import Userpng from '../../img/userphoto.png'

function RightSidebar({ active, setRightSidebar }) {

    const refsidebar=useRef();
    useEffect(() => {
        refsidebar.current.scroll(0,0)
    }, [active])
    
  return (
    <>
      <div
        className={`right-sidebar ${active ? "" : "right-sidebar-hide"}`}
        onClick={() => setRightSidebar(false)}
      ></div>
      <div ref={refsidebar}
        className={`${
          active ? "right-sidebar-inner " : "right-sidebar-inner-hide"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
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
