import React, { useEffect, useState } from 'react'
import './SecondSection.css'
import thumb1 from '../../Assests/thumbnail1.png'
import { API_KEY,valueConverter } from '../../data'
import {Link} from 'react-router-dom'

const SecondSection = ({categoryId}) => {

    const [apiData,setData]=useState([]);

    const fetchData=async ()=>{
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(videoList_url).then(res=>res.json()).then(data=>setData(data.items));
    }
    useEffect(()=>{
        fetchData();
        console.log("API",apiData);
    },[])

  return (
    <div className='recommendation-container'>


        {apiData?
            apiData.map((videos,index)=>(
                <Link to={`/video/${videos.snippet.categoryId}/${videos.id}`} key={index}>
                <div className='recommendation-video' >
                    <img src={videos.snippet.thumbnails.medium.url} alt="video" />
                    <div className='desc-section'>
                        <p>{videos.snippet.title}</p>
                        <p>{videos.snippet.channelTitle}</p>
                        <p>{valueConverter(videos.statistics.viewCount)} Views</p>
                    </div>
                </div>
                </Link>
            ))
        
        :""
        }
    </div>
  )
}

export default SecondSection