import React from "react"

function HideComments({isHidden, handleIsHidden}){
    return(
        <div>
            <button onClick = {handleIsHidden}>{isHidden ? "Show" : "Hide"} Comments</button>
        </div>
    )
}

export default HideComments