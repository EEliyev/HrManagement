import { MenuItem, Select } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarSvg } from "../../svg/job/calendar.svg";
import UserPng from "../../img/userphoto.png";
import UserPng2 from "../../img/user2.png";
import UserPng4 from "../../img/user4.png";
import "./Job.css";
import { Link } from "react-router-dom";
import JobDetail from "../JobDetail/JobDetail";

function Job() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedData, setSelectedData] = useState(null);

  const data = [
    {
      job: "Design",
      pos: "Senior Product Designer",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 3, status: "new" },
        { name: "Wade Warren", rate: 4, status: "new" },
        { name: "Janny Wilson Cooper", rate: 4, status: "new" },
        { name: "Jacob Jones", rate: 2, status: "new" },
        { name: "Esther Howard", rate: 5, status: "shortlist" },
        { name: "Robert Fox", rate: 4, status: "shortlist" },
        { name: "Jacob Jones", rate: 2, status: "shortlist" },
        { name: "Kristin Watson", rate: 3, status: "shortlist" },
        { name: "Robert Jones", rate: 5, status: "interview" },
        { name: "Jason Stathem", rate: 5, status: "interview" },
        { name: "James Rock", rate: 3, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
    {
      job: "Design",
      pos: "UI/UX Designer",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 2, status: "new" },
        { name: "Wade Warren", rate: 3, status: "new" },
        { name: "Janny Wilson Cooper", rate: 3, status: "new" },
        { name: "Jacob Jones", rate: 4, status: "new" },
        { name: "Esther Howard", rate: 5, status: "shortlist" },
        { name: "Robert Fox", rate: 5, status: "shortlist" },
        { name: "Jacob Jones", rate: 3, status: "shortlist" },
        { name: "Kristin Watson", rate: 2, status: "shortlist" },
        { name: "Robert Jones", rate: 2, status: "interview" },
        { name: "Jason Stathem", rate: 2, status: "interview" },
        { name: "James Rock", rate: 4, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
    {
      job: "Design",
      pos: "Head of UX",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 2, status: "new" },
        { name: "Wade Warren", rate: 3, status: "new" },
        { name: "Janny Wilson Cooper", rate: 4, status: "new" },
        { name: "Jacob Jones", rate: 3, status: "new" },
        { name: "Esther Howard", rate: 1, status: "shortlist" },
        { name: "Robert Fox", rate: 2, status: "shortlist" },
        { name: "Jacob Jones", rate: 2, status: "shortlist" },
        { name: "Kristin Watson", rate: 3, status: "shortlist" },
        { name: "Robert Jones", rate: 4, status: "interview" },
        { name: "Jason Stathem", rate: 5, status: "interview" },
        { name: "James Rock", rate: 5, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
    {
      job: "Marketing",
      pos: "Copywriter",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 2, status: "new" },
        { name: "Wade Warren", rate: 4, status: "new" },
        { name: "Janny Wilson Cooper", rate: 3, status: "new" },
        { name: "Jacob Jones", rate: 1, status: "new" },
        { name: "Esther Howard", rate: 4, status: "shortlist" },
        { name: "Robert Fox", rate: 2, status: "shortlist" },
        { name: "Jacob Jones", rate: 4, status: "shortlist" },
        { name: "Kristin Watson", rate: 3, status: "shortlist" },
        { name: "Robert Jones", rate: 2, status: "interview" },
        { name: "Jason Stathem", rate: 3, status: "interview" },
        { name: "James Rock", rate: 5, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
    {
      job: "Design",
      pos: "Junior Designer",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 2, status: "new" },
        { name: "Wade Warren", rate: 3, status: "new" },
        { name: "Janny Wilson Cooper", rate: 4, status: "new" },
        { name: "Jacob Jones", rate: 3, status: "new" },
        { name: "Esther Howard", rate: 3, status: "shortlist" },
        { name: "Robert Fox", rate: 1, status: "shortlist" },
        { name: "Jacob Jones", rate: 2, status: "shortlist" },
        { name: "Kristin Watson", rate: 3, status: "shortlist" },
        { name: "Robert Jones", rate: 3, status: "interview" },
        { name: "Jason Stathem", rate: 4, status: "interview" },
        { name: "James Rock", rate: 5, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
    {
      job: "Developer",
      pos: "WordPress Developer",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 4, status: "new" },
        { name: "Wade Warren", rate: 3, status: "new" },
        { name: "Janny Wilson Cooper", rate: 2, status: "new" },
        { name: "Jacob Jones", rate: 1, status: "new" },
        { name: "Esther Howard", rate: 2, status: "shortlist" },
        { name: "Robert Fox", rate: 4, status: "shortlist" },
        { name: "Jacob Jones", rate: 3, status: "shortlist" },
        { name: "Kristin Watson", rate: 4, status: "shortlist" },
        { name: "Robert Jones", rate: 1, status: "interview" },
        { name: "Jason Stathem", rate: 4, status: "interview" },
        { name: "James Rock", rate: 5, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
    {
      job: "Design",
      pos: "UX Content Writer",
      loca: "Roma, Italy",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque error! Et architecto voluptatum ab aliquam magni, ea dolore provident!",
      candidates: [
        { name: "Jane Cooper", rate: 2, status: "new" },
        { name: "Wade Warren", rate: 4, status: "new" },
        { name: "Janny Wilson Cooper", rate: 3, status: "new" },
        { name: "Jacob Jones", rate: 1, status: "new" },
        { name: "Esther Howard", rate: 2, status: "shortlist" },
        { name: "Robert Fox", rate: 4, status: "shortlist" },
        { name: "Jacob Jones", rate: 3, status: "shortlist" },
        { name: "Kristin Watson", rate: 2, status: "shortlist" },
        { name: "Robert Jones", rate: 1, status: "interview" },
        { name: "Jason Stathem", rate: 4, status: "interview" },
        { name: "James Rock", rate: 5, status: "test" },
        { name: "Big John", rate: 5, status: "hired" },
      ],
    },
  ];

  function filterData(item) {
    return data.filter(x => x.pos == item);
  }
  console.log("job");
  return (
    <div className="job">
      <div className="container-title">
        Jobs
        <div className="job-filter">
          <div className="job-filter-date">
            Sort by:
            <div className="job-filter-date-title">Creation Date</div>
            <div className="jobfilter-date-icon">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CalendarSvg />}
              ></DatePicker>
            </div>
          </div>
          <div className="job-filter-status">
            Status:
            <div className="job-filter-status-select">
              <Select labelId="label" id="select" value="Create New">
                <MenuItem value="Create New">Create New</MenuItem>
                <MenuItem value="Lastest">Lastest</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="job-container">
        <div className="job-container-head">
          <div
            className={`job-container-head-item ${selectedTab == 0 ? "job-container-head-item-active" : ""
              }`}
            onClick={() => setSelectedTab(0)}
          >
            Active Jobs <div className="job-container-head-item-count">42</div>
          </div>
          <div
            className={`job-container-head-item ${selectedTab == 1 ? "job-container-head-item-active" : ""
              }`}
            onClick={() => setSelectedTab(1)}
          >
            Completed Jobs{" "}
            <div className="job-container-head-item-count">34</div>
          </div>
          <div
            className={`job-container-head-item ${selectedTab == 2 ? "job-container-head-item-active" : ""
              }`}
            onClick={() => setSelectedTab(2)}
          >
            Unfinished Jobs{" "}
            <div className="job-container-head-item-count">17</div>
          </div>
        </div>
        <div className="job-container-body">
          {data?.map((x, i) => {
            return (
              <Link key={i} to={{ pathname: '/jobdetails/' + i, id: i }} state={{ data: filterData(x.pos) }} className="job-container-body-card">
                <div className="job-container-body-card-head">
                  <div className="job-container-body-card-head-logo">
                    <img src={UserPng} alt="" />
                  </div>
                  <div className="job-container-body-card-head-date">
                    {moment().format("D")} {moment().format("MMM")}
                  </div>
                </div>
                <div className="job-container-body-card-body">
                  <div className="job-container-body-card-body-pos">
                    {x.job}
                  </div>
                  <div className="job-container-body-card-body-name">
                    {x.pos}
                  </div>
                  <div className="job-container-body-card-body-place">
                    {x.loca}
                  </div>
                  <div className="job-container-body-card-body-text">
                    {x.title}
                  </div>
                </div>
                <div className="job-container-body-card-footer">
                  <div className="job-container-body-card-footer-left">
                    <div
                      className="job-container-body-card-footer-left-item"
                      style={{ backgroundColor: "#9AE1F7" }}
                    >
                      <img src={UserPng4} alt="" />
                    </div>
                    <div
                      className="job-container-body-card-footer-left-item"
                      style={{ backgroundColor: "#D5F3E4" }}
                    >
                      <img src={UserPng} alt="" />
                    </div>
                    <div
                      className="job-container-body-card-footer-left-item"
                      style={{ backgroundColor: "#FFCA65" }}
                    >
                      <img src={UserPng2} alt="" />
                    </div>
                    <div
                      className="job-container-body-card-footer-left-item"
                      style={{ backgroundColor: "#F0F0F0" }}
                    >
                      +
                    </div>
                  </div>
                  <div className="job-container-body-card-footer-right">
                    +{parseInt(Math.random() * 100) + 50} Candidates
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="job-container-body-card">
            <div style={{ fontSize: "3rem", lineHeight: "2rem" }}>+</div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginTop: "0.1rem",
              }}
            >
              Create New Job
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Job);
