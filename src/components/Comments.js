import React from 'react'
import { directive } from '@babel/types'


export default function Comments(props){
    const comments = props.data.map(comments => (
        <h4>{comments}</h4>
    )) 
    return(
        <div className='comments'>
            {comments}
        </div>
    )
}