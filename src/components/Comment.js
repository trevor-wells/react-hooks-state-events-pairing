import React from "react"
import LikeButtons from "./LikeButtons"
import CommentVotes from "./CommentVotes"

function Comment({user, comment}){
    return(
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <CommentVotes/>
        </div>
    )
}

export default Comment
