import React from "react";
import "./Calendar.css";
import CalendarBar from "./CalendarBar";
import Img1 from "../../img/img1.png";
import Img2 from "../../img/img2.png";
import moment from "moment/moment";

function Calendar() {


  return (
    <div className="calendar">
      <h2 className="container-title">Calendar</h2>
      <div className="calendar-container">
        <div className="calendar-left">
          <CalendarBar width={100} />
        </div>
        <div className="calendar-right">
          <div className="calendar-right-item">
            <div className="calendar-right-item-logo">
              <img src={Img1} alt="" />
            </div>
            <div className="calendar-right-item-body">
              <div className="calendar-right-item-body-time">
                <div style={{fontWeight:700}}>{moment().format("DD")}</div>
                <div style={{fontSize:"0.8rem",opacity:0.7}}>{moment().format("MMM")}</div>
              </div>
              <div className="calendar-right-item-body-text">
                <div className="calendar-right-item-body-text-head">Pixa Design Meetup</div>
                <div className="calendar-right-item-body-text-link">design.io</div>
                <div className="calendar-right-item-body-text-time">{moment().format("dddd h:mm:ss a")}</div>
              </div>
            </div>
          </div>
          <div className="calendar-right-item">
            <div className="calendar-right-item-logo">
              <img src={Img2} alt="" />
            </div>
            <div className="calendar-right-item-body">
              <div className="calendar-right-item-body-time">
                <div style={{fontWeight:700}}>{moment().format("DD")}</div>
                <div style={{fontSize:"0.8rem",opacity:0.7}}>{moment().format("MMM")}</div>
              </div>
              <div className="calendar-right-item-body-text">
                <div className="calendar-right-item-body-text-head">Pixa Design Meetup</div>
                <div className="calendar-right-item-body-text-link">design.io</div>
                <div className="calendar-right-item-body-text-time">{moment().format("dddd h:mm:ss a")}</div>
              </div>
            </div>
          </div>
          <div className="calendar-right-item">
            <div className="calendar-right-item-body">
              <div className="calendar-right-item-body-time">
                <div style={{fontWeight:700}}>{moment().format("DD")}</div>
                <div style={{fontSize:"0.8rem",opacity:0.7}}>{moment().format("MMM")}</div>
              </div>
              <div className="calendar-right-item-body-text">
                <div className="calendar-right-item-body-text-head">Pixa Design Meetup</div>
                <div className="calendar-right-item-body-text-link">design.io</div>
                <div className="calendar-right-item-body-text-time">{moment().format("dddd h:mm:ss a")}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(Calendar);
