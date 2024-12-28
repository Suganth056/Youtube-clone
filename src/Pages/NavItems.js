import React from 'react'
import './NavItems.css'

import home from '../Assests/home.png'
import gaming from '../Assests/game_icon.png'
import automobiles from '../Assests/automobiles.png'
import sports from '../Assests/sports.png'
import entertainment from '../Assests/entertainment.png'
import technology from '../Assests/tech.png'
import music from '../Assests/music.png'
import blogs from '../Assests/blogs.png'
import news from '../Assests/news.png'
import jack from '../Assests/jack.png'
import simon from '../Assests/simon.png'
import megan from '../Assests/megan.png'
import gerard from '../Assests/gerard.png'

const NavItems = ({category,setCategory,checkNavActive}) => {
  return (
    <div className={`container-nav-section ${checkNavActive?"active":""}`} >
        <div className='nav-section-1'>
            <div className={`side-link ${category===0? "active":""}`} onClick={(e)=>{setCategory(0)}}>
              <img src={home} alt=""/>
              <p className={`${checkNavActive?"active":""}`}>Home</p>
            </div>
            <div className={`side-link ${category===20? "active":""}`} onClick={(e)=>{setCategory(20)}}>
              <img src={gaming} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Gaming</p>
            </div>
            <div className={`side-link ${category===2? "active":""}`} onClick={(e)=>{setCategory(2)}}>
              <img src={automobiles} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Automobiles</p>
            </div>
            <div className={`side-link ${category===17? "active":""}`} onClick={(e)=>{setCategory(17)}}>
              <img src={sports} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Sports</p>
            </div>
            <div className={`side-link ${category===24? "active":""}`} onClick={(e)=>{setCategory(24)}}>
              <img src={entertainment} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Entertainment</p>
            </div>
            <div className={`side-link ${category===28? "active":""}`} onClick={(e)=>{setCategory(28)}}>
              <img src={technology} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Technology</p>
            </div>
            <div className={`side-link ${category===10? "active":""}`} onClick={(e)=>{setCategory(10)}}>
              <img src={music} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Music</p>
            </div>
            <div className={`side-link ${category===21? "active":""}`}  onClick={(e)=>{setCategory(21)}}>
              <img src={blogs} alt="" />
              <p className={`${checkNavActive?"active":""}`}>Blogs</p>
            </div>
            <div className={`side-link ${category===25? "active":""}`} onClick={(e)=>{setCategory(25)}}>
              <img src={news} alt="" />
              <p className={`${checkNavActive?"active":""}`}>News</p>
            </div>
        </div>
        <div className='nav-section-2'>
          <p className={`${checkNavActive?"active":""}`}>SUBSCRIBED</p>
          <div>
            <div className='nav-subscription'>
              <img src={jack} alt="" />
              <p className={`${checkNavActive?"active":""}`}>J2B</p>
            </div>
            <div className='nav-subscription'>
              <img src={megan} alt="" />
              <p className={`${checkNavActive?"active":""}`}>PewDiePie</p>
            </div>
            <div className='nav-subscription'>
              <img src={simon} alt="" />
              <p className={`${checkNavActive?"active":""}`}>AR_Gamer</p>
            </div>
            <div className='nav-subscription'>
              <img src={gerard} alt="" />
              <p className={`${checkNavActive?"active":""}`}>MR.360</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavItems
