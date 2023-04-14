import React, { useState } from "react"
import Comment from "./Comment"


function CommentDisplay({video, isHidden}){
    const [search, setSearch] = useState("")

    function handleSearchChange(event){setSearch(event.target.value)}

    const myComments = video.comments.map(comment => <Comment 
        key={comment.id} 
        user={comment.user} 
        comment={comment.comment}/>)
    
    const commentToDisplay = myComments
    //search bar
    .filter(comment => comment.props.user.toLowerCase().includes(search.toLowerCase()))
    //deleted comments


    return(
        <div>
            <h2>{commentToDisplay.length} Comment{(commentToDisplay.length === 1 ? null : "s")}</h2>
            {(isHidden ? null :
            <form>
                <input type="text" value={search} onChange={handleSearchChange}></input>
                <input type="submit"></input>
            </form>)}
            {(isHidden ? null : commentToDisplay)}
        </div>
    )
}

export default CommentDisplay