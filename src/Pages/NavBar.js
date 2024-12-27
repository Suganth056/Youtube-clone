import React, { useState } from 'react'
import './NavBar.css'

import menu from '../Assests/menu.png'
import vidTube from '../Assests/logo.png'
import searchBar from '../Assests/search.png'
import uploadBar from '../Assests/upload.png'
import notificationBar from '../Assests/notification.png'
import moreBar from '../Assests/more.png'
import jack from '../Assests/jack.png'
import { Navigate, useNavigate } from 'react-router-dom'


const NavBar = ({checkNavActive,setNav}) => {
    const nav=useNavigate();
    function toggleActive(){
        const data=checkNavActive?null:"active";
        setNav(data);
        console.log(checkNavActive);
    }
    const navigateFun=(e)=>{
        e.preventDefault();
        nav('/');
    }
  return (
    <div className='Nav-section'>
        <div className='left-side'>
            <img src={menu} alt="MenuImg" onClick={()=>toggleActive()}/>
            <img src={vidTube} alt="MenuImg" className='img-brandName' onClick={(e)=>navigateFun(e)}/>
        </div>
        <div className='center-side'>
            <div>
                <input type="text" 
                placeholder='search'
                />
                <button type='submit'><img src={searchBar} alt="" /></button>
            </div>
        </div>
        <div className='right-side'>
            <img src={uploadBar} alt="" className='hidden-img'/>
            <img src={moreBar} alt="" className='hidden-img'/>
            <img src={notificationBar} alt="" className='hidden-img'/>
            <img src={jack} alt="" className='person-dp'/>
        </div>
    </div>
  )
}

export default NavBar