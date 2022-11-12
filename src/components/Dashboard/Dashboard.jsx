import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { ReactComponent as GrowSvg } from "../../svg/dashboard/growth-arrow.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChartBar from "./ChartBar";
import { MenuItem, Select } from "@mui/material";
import UserPng from "../../img/user.png";
import { ReactComponent as DotsSvg } from '../../svg/message/dots.svg'

function Dashboard() {
  const [totalBar, setTotalBar] = useState(1);
  const [shortBar, setShortBar] = useState(0);
  const [rejectBar, setRejectBar] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setTotalBar(5000);
      setShortBar(3600);
      setRejectBar(1400);
    }, 100);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="dashboard">
      <h2 className="container-title">Dashboard</h2>
      <div className="dashboard-container">
        <div className="dashboard-head">
          <div className="dashboard-head-item">
            <div className="dashboard-head-item-left">
              <p>Total Applications</p>
              <b>{totalBar}</b>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="dashboard-head-item-left-increase-total">
                  <GrowSvg className="grow-total" />
                </div>
                +14%
              </div>
            </div>
            <div className="dashboard-head-item-right">
              <CircularProgressbar
                className="totalbar"
                text={`+${parseInt((totalBar / 7000) * 100)}%`}
                value={parseInt((totalBar / 7000) * 100)}
              />
            </div>
          </div>
          <div className="dashboard-head-item">
            <div className="dashboard-head-item-left">
              <p>ShotListed Candidates</p>
              <b>{parseInt(shortBar)}</b>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="dashboard-head-item-left-increase-shot">
                  <GrowSvg className="grow-shot" />
                </div>
                +14%
              </div>
            </div>
            <div className="dashboard-head-item-right">
              <CircularProgressbar
                className="shotbar"
                text={`+${parseInt((shortBar / totalBar) * 100)}%`}
                value={parseInt((shortBar / totalBar) * 100)}
              />
            </div>
          </div>
          <div className="dashboard-head-item">
            <div className="dashboard-head-item-left">
              <p>Rejected Candidates</p>
              <b>{rejectBar}</b>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="dashboard-head-item-left-increase-reject">
                  <GrowSvg className="grow-reject" />
                </div>
                +14%
              </div>
            </div>
            <div className="dashboard-head-item-right">
              <CircularProgressbar
                className="rejectbar"
                text={`+${parseInt((rejectBar / totalBar) * 100)}%`}
                value={parseInt((rejectBar / totalBar) * 100)}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-main">
          <ChartBar width={1070-32} />
        </div>
        <div className="dashboard-footer">
          <div className="dashboard-footer-left">
            <div className="dashboard-footer-left-head">
              <h3>Activity Feed</h3>
              <Select labelId="label" id="select" value="All Activity">
                <MenuItem value="All Activity">All Activity</MenuItem>
                <MenuItem value="Lastest Activity">Lastest Activity</MenuItem>
              </Select>
            </div>
            <div className="dashboard-footer-left-body">
              <div className="dashboard-footer-left-body-icon">
                <img src={UserPng} alt="" />
              </div>
              <div className="dashboard-footer-left-body-title">
                <p>Harvin applied for the job Product Designer</p>
                <span>4 minute ago</span>
              </div>
              <div className="dashboard-footer-left-body-status">Appliying</div>
            </div>
            <div className="dashboard-footer-left-body">
              <div className="dashboard-footer-left-body-icon">
                <img src={UserPng} alt="" />
              </div>
              <div className="dashboard-footer-left-body-title">
                <p>Harvin applied for the job Product Designer</p>
                <span>4 minute ago</span>
              </div>
              <div className="dashboard-footer-left-body-status">Appliying</div>
            </div>
            <div className="dashboard-footer-left-body">
              <div className="dashboard-footer-left-body-icon">
                <img src={UserPng} alt="" />
              </div>
              <div className="dashboard-footer-left-body-title">
                <p>Harvin applied for the job Product Designer</p>
                <span>4 minute ago</span>
              </div>
              <div className="dashboard-footer-left-body-status">Appliying</div>
            </div>
          </div>
          <div className="dashboard-footer-right">
            <div className="dashboard-footer-right-head">
              <h3>Meetings</h3>
              <Select labelId="label" id="select" value="Create New">
                <MenuItem value="Create New">Create New</MenuItem>
                <MenuItem value="Lastest">Lastest</MenuItem>
              </Select>
            </div>
            <div className="dashboard-footer-left-body">
            <div className="dashboard-footer-left-body-icon">
                <img src={UserPng} alt="" />
              </div>
              <div className="dashboard-footer-right-body-title">
                <p>Interview</p>
                <span>9 PM</span>
              </div>
              <div className="dashboard-footer-right-body-status"><DotsSvg/></div>
            </div>
            <div className="dashboard-footer-left-body">
            <div className="dashboard-footer-left-body-icon">
                <img src={UserPng} alt="" />
              </div>
              <div className="dashboard-footer-right-body-title">
                <p>Interview</p>
                <span>9 PM</span>
              </div>
              <div className="dashboard-footer-right-body-status"><DotsSvg/></div>
            </div>
            <div className="dashboard-footer-left-body">
            <div className="dashboard-footer-left-body-icon">
                <img src={UserPng} alt="" />
              </div>
              <div className="dashboard-footer-right-body-title">
                <p>Interview</p>
                <span>9 PM</span>
              </div>
              <div className="dashboard-footer-right-body-status"><DotsSvg/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Dashboard);
