import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './MainPage.css'
import {Link} from 'react-router-dom'

import {API_KEY,valueConverter} from '../data';


const MainPage = ({category,setCategory}) => {

  const [data,setData]=useState([]);
  const [dataError,setError]=useState(null);
  
  const fetchData=async()=>{
    try{
      const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      await fetch(videoList_url).then(res=>res.json()).then((data)=>setData(data.items));
      await console.log(data)
    }
    catch(err){
      console.log("Err");
      setError(err);
      console.log(dataError);
    }
      
  }

  useEffect(()=>{
    (async()=>fetchData())();

  },[category])
  
  return (
    <div className='Feed-Section'>

        {
          !dataError?  //Represent whether data is present or not present
          data.map((item,index)=>{
            return(
                    <div className='card' key={index}>
                          <Link className='LinkTag' to={`video/${item.snippet.categoryId}/${item.id}`}>
                              <img src={item.snippet.thumbnails.medium.url} alt="" />
                              <h4>{item.snippet.title}</h4>
                              <p className='title'>{item.snippet.channelTitle}</p>
                              <p className='video-details'>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </Link>
                  </div>
            )
          }):
          <h2>Sorry! Something Wents Wrong</h2>
        }
        
    </div>
  )
}

export default MainPage