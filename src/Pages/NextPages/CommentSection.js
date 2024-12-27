import React from 'react'
import './CommentSection.css'
import logo from '../../Assests/jack.png'
import like from '../../Assests/like.png'
import dislike from '../../Assests/dislike.png'
import {API_KEY,valueConverter} from '../../data';

const CommentSection = ({videoId,apiData,setApiData,commentData}) => {
  return (
    <div className='comments-container'>
        <p>{apiData?valueConverter(apiData.statistics.commentCount):""} Comments</p>

        <div className='comments add-your-comment'>
            <img src={logo} alt="" />
            <input type="text" 
            placeholder='Add a Comment...'
            />
        </div>
        {
            commentData.map((comments,index)=>(
                <div className='comments' key={index}>
                    <img src={comments.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div className='id-details'>
                        <p className='id-name'>{comments.snippet.topLevelComment.snippet.authorDisplayName} <span>3 years ago</span></p>
                        <p className='comment-des'>{comments.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className='like-dislike'>
                            <img src={like} alt="" />{valueConverter(comments.snippet.topLevelComment.snippet.likeCount)}
                            <img src={dislike} alt="" />
                        </div>
                        <p className='link'>view replies</p>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default CommentSection