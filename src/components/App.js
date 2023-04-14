import React, { useState } from "react"
import video from "../data/video.js"
import Video from "./Video"
import LikeButtons from "./LikeButtons"
import HideComments from "./HideComments"
import CommentDisplay from "./CommentDisplay"

function App() {
  const [isHidden, setIsHidden] = useState(false)

    function handleIsHidden(){
        setIsHidden(isHidden => !isHidden)
    }

  return (
    <div className="App">
      <Video video={video}/>
      <LikeButtons video={video}/>
      <HideComments isHidden={isHidden} handleIsHidden={handleIsHidden} video={video}/>
      <CommentDisplay isHidden={isHidden} video={video}/>
    </div>
  )
}

export default App
