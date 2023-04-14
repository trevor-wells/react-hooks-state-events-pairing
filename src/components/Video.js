import React from "react"

function Video({video}){
    
    return(
        <>
            <iframe src={video.embedUrl} title={video.title} height="500" width="800"/>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
        </>
    )
}

export default Video