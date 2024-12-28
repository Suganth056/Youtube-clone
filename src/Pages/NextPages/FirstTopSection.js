import React, { useState,useEffect } from 'react'
import videofile from '../../Assests/video.mp4'
import './FirstTopSection.css'
import profile from '../../Assests/jack.png'
import like from '../../Assests/like.png'
import dislike from '../../Assests/dislike.png'
import save from '../../Assests/save.png'
import share from '../../Assests/share.png'
import cast from  '../../Assests/cast.png'
import {API_KEY,valueConverter} from '../../data';
import moment from 'moment'

const FirstTopSection = ({videoId,apiData,setApiData,channelData,setChannelData}) => {
    console.log("FirstTopSection",videoId);
    console.log("Channel=",channelData)
 
  return (
    <div className='container-video-and-likedetails'>
        {/* <video src={videofile} autoPlay controls muted></video> */}
        <div className='video-container'>
            <iframe src={`https://www.youtube.com/embed/${videoId}`} title="I Found Best Speaker - 1st Time in India !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        <div className='Subscription-container'>
            <p className='desc-details'>{apiData?apiData.snippet.title:"Sorry Content Currently Unavailable"}</p>
            <p className='view-det'>{apiData?valueConverter(apiData.statistics.viewCount):"No"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"A day Ago"}</p>
            <div className='subscribe-div'>
                <section >
                    <img src={channelData?channelData.snippet.thumbnails.default.url:profile} alt="" />
                    <p style={{fontSize:'14px',fontWeight:"bold",color:'rgb(68, 64, 64)'}}>{apiData?apiData.snippet.channelTitle:"UNknown"}  <span style={{color:'grey',fontWeight:400}}>{channelData?valueConverter(channelData.statistics.subscriberCount):1} Subscribers</span> </p>
                </section>
                <section>
                    <button>Subscribe</button>
                </section>
            </div>
            <div className='btn-all'>
                <button>
                    <img src={like} alt="" /> {apiData?valueConverter(apiData.statistics.likeCount):"No"} | <img src={dislike} alt="" /> 12
                </button>
                <button>
                    <img src={share} alt="" />Share
                </button>
                <button>
                    <img src={cast} alt="" />Cast
                </button>
                <button>
                    <img src={save} alt="" />Save
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default FirstTopSection