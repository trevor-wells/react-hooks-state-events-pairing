import React, {useState} from "react";

function LikeButtons({video}) {
    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

function handleUpVotes(){
    setUpVotes((upVotes) => ++upVotes) 
}

function handleDownVotes(){
    setDownVotes(downVotes => ++downVotes)
}


    return (
        <div>
        <button onClick = {handleUpVotes} >{upVotes}👍</button>
        <button onClick = {handleDownVotes}>{downVotes}️👎</button>
        </div>
    )
}

export default LikeButtons