import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import './VideoPage.css';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const {categoryId,videoId}=useParams();
  console.log(categoryId,"    ",videoId); 
  return (
    <div className='Video-Container'>
        <FirstSection videoId={videoId}/>
        <SecondSection 
        
        categoryId={categoryId}
        />
    </div>
  )
}

export default VideoPage