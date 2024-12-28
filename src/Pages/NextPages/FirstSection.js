import React, { useState,useEffect } from 'react'
import FirstTopSection from './FirstTopSection'
import CommentSection from './CommentSection'
import './FirstSection.css'
import {API_KEY,valueConverter} from '../../data';

const FirstSection = ({videoId}) => {
  const [apiData,setApiData]=useState("");
  const [channelData,setChannelData]=useState('');
  const [commentData,setCommentData]=useState([]);

    const fetchVideoData=async()=>{
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
        console.log(apiData);

    }
    const fetchChannelDetails=async()=>{
        const channelDet_URL=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet?apiData.snippet.channelId:""}&key=${API_KEY}`;
        await fetch(channelDet_URL).then(res=>res.json()).then(data=> setChannelData(data.items?data.items[0]:""));

        const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
    }

    useEffect(()=>{
        fetchVideoData();
           
    },[videoId])
    

    useEffect(()=>{
      setTimeout(()=>{
        fetchChannelDetails();
      },2000)
        

    },[apiData])

  return (
    <div className='Contains1-Comment'>
      {
        apiData?
      
      <FirstTopSection 
      videoId={videoId}
      apiData={apiData}
      setApiData={setApiData}
      channelData={channelData}
      setChannelData={setChannelData}
      />
      :"Data Loading"
      }
      <CommentSection 
      videoId={videoId}
      apiData={apiData}
      setApiData={setApiData}
      commentData={commentData}

      />

    </div>
  )
}

export default FirstSection