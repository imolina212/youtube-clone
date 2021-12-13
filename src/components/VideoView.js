import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const VideoView = () => {
        const opts = {
            height: '390',
            width: '640',
        }
        let vidParam = useParams()
    return (
        <div>
            <YouTube videoId={vidParam.id} opts={opts}/>
            <hr></hr>
            <Comments />
        </div>
    )
}

export default VideoView;
