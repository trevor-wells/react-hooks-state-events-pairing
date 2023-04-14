import React, {useState} from "react"


function CommentVotes(){
    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)

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

export default CommentVotes