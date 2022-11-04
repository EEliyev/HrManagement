import React, { useState } from 'react'
import {ReactComponent as QuestionSvg} from '../../svg/nav/question.svg'
import {ReactComponent as BellSvg} from '../../svg/nav/bell.svg'
import {ReactComponent as SearchSvg} from '../../svg/nav/search.svg'
import UserPng from '../../img/userphoto.png'
import './Nav.css'
import RightSidebar from '../RightSidebar/RightSidebar'

function Nav() {
  const [rightSidebar,setRightSidebar]=useState(false);

  return (
    <>
    <RightSidebar active={rightSidebar} setRightSidebar={setRightSidebar}/>
    <div className='nav'>
  
        <div className="nav-search">
            <input className='nav-input' type="text" placeholder='Search by anything' />
            <button className='nav-btn'><SearchSvg/></button>
        </div>
        <div className="nav-user">
            <div className="nav-user-item"><QuestionSvg/></div>
            <div className="nav-user-item"><BellSvg/></div>
            <div onClick={()=>setRightSidebar(true)} id='circle' className="nav-user-item"><img src={UserPng} alt="" /></div>
            </div>
    </div>
    </>
  )
}

export default Nav