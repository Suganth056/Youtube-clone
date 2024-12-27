import React, { useState } from 'react'
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';
import VideoPage from './Pages/NextPages/VideoPage';
import {Routes,Route} from 'react-router-dom'

const App = () => {
  const [checkNavActive,setNav]=useState(null);
  return (
    <div>
      <NavBar 
      checkNavActive={checkNavActive}
      setNav={setNav}
      />

      <Routes>
        <Route path='/' element={<HomePage  checkNavActive={checkNavActive}/>}>


        </Route>
        
        <Route path='/video/:categoryId/:videoId' element={<VideoPage/>}>


        </Route>

      </Routes>



    </div>
    
  )
}

export default App