import React from "react";
import "../VideoCard.css";
import { Link } from "react-router-dom";

class VideoCard extends React.Component {
  render() {
    const { title, thumbnails } = this.props.vid.snippet;

    return (
      <div>
        <Link to={`/videos/${this.props.vid.id.videoId}`}>
          <img src={thumbnails.high.url} alt="video thumbnails" />
        </Link>
        <h4>{title}</h4>
      </div>
    );
  }
}

export default VideoCard;
