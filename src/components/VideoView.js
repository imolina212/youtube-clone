import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const VideoView = () => {
        const opts = {
            height: '360',
            width: '480',
        }
        let vidId = useParams()
    return (
        <div>
            <div>
              <YouTube videoId={vidId.id} opts={opts}/>  
            </div>
            
            <hr></hr>
            <Comments />
        </div>
    )
}

export default VideoView;
