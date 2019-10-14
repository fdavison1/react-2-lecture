import React from 'react'
import Comments from './Comments'


export default function Post(props) {
    return(
        <div className='Post'>
            <h2>{props.postInfo.title}</h2>
            <p>{props.postInfo.body}</p>
            <Comments data={props.postInfo.comments}/>
        </div>
    )
}
    