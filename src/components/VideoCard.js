import React from "react";
import "../VideoCard.css";
import { Link } from "react-router-dom";

class VideoCard extends React.Component {
  render() {
    const { title, thumbnails } = this.props.vid.snippet;

    return (
      <div className="video-card">
        <Link to={`/videos/${this.props.vid.id.videoId}`}>
          <img src={thumbnails.default.url} alt="video thumbnails" />
        </Link>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default VideoCard;
