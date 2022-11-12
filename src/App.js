import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import Candidates from './components/Candidates/Candidates';
import Dashboard from './components/Dashboard/Dashboard';
import Job from './components/Job/Job';
import JobDetail from './components/JobDetail/JobDetail';
import Message from './components/Message/Message';
import Nav from './components/Nav/Nav';
import NotFound from './components/NotFound/NotFound';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const white = "--body-color: #F5F6FA;--body-color-light:white;--theme-color:#26273B;--body-border:#E8E8E8;--link-color:black;--grey: rgba(0, 0, 0, 0.425);--input - bg - color: #FAFBFD;--blue:#377DFF;--activity - status: #D7E5FF;--black - grey: black;--candidates - count: #D6F5E6; ";
  const dark=" --body-color:#1B1C31;--body-color-light:#26273B;--theme-color:white;--body-border:#1B1C31;--link-color:white;--grey: rgba(255, 255, 255, 0.425);--input-bg-color:#2E2F44;--blue:#377DFF;--activity-status:#263560;--black-grey:grey;--candidates-count:#414755;"
  
  if(localStorage.getItem("themeLs")==null){
    localStorage.setItem("themeLs","white");

  }
  else if(localStorage.getItem("themeLs")=="white"){
    window.document.body.style=white;
  }
  else{
    window.document.body.style=dark;
  }


  return (
    <div className="App" >
      <Sidebar/>

      <div className='right'>
      <Nav />
      <div className='right-inner'>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path={"/message"}  element={<Message/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/jobs' element={<Job/>}/>
          <Route path='/jobdetails/:id/' element={<JobDetail/>}/>
          <Route path='/candidates' element={<Candidates/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>

      </div>
    </div>
  );
}

export default App;
