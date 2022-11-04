import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import Dashboard from './components/Dashboard/Dashboard';
import Job from './components/Job/Job';
import JobDetail from './components/JobDetail/JobDetail';
import Message from './components/Message/Message';
import Nav from './components/Nav/Nav';
import NotFound from './components/NotFound/NotFound';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {



console.log("app")
  return (
    <div className="App">
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
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>

      </div>
    </div>
  );
}

export default App;
