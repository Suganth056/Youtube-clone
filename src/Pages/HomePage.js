import React, { useState } from 'react'
import './HomePage.css'
import NavItems from './NavItems';
import MainPage from './MainPage';

const HomePage = ({checkNavActive}) => {
  const [category,setCategory]=useState(0);
  return (
    <div className='container-home'>
        <NavItems 
        category={category}
        setCategory={setCategory}
        checkNavActive={checkNavActive}
        />
        <MainPage 
        category={category}
        setCategory={setCategory}
        />
    </div>
  )
}

export default HomePage