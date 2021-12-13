import React from "react";
import VideoCard from "./VideoCard";


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      results: "",
      videos: []
    }
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      results: this.state.userInput,
    });
    this.fetchVideos();
  };

  fetchVideos() {
    if (this.state.userInput === 0) return;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      //  console.log(data)
      this.setState({
        videos: data.items,
        userInput: "",
      })
    })
  }
    static getDerivedStateFromProps(props, state) {
    return {
      results: props.clear ? [] : state.results,
      videos: props.clear ? [] : state.videos,
    };
  }

  render() {
    const videosToDisplay = this.state.videos.map((video, i) => {
      console.log(video)
      return (<VideoCard vid={video} key={i} />);
    });
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              id="search"
              value={this.state.userInput}
              onChange={this.handleUserInput}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="video-list">
          {videosToDisplay.length === 0 ? <p className="no-results">No Search Results Yet!</p> : <div className="search-results">
            {videosToDisplay}</div>}
        </div>
      </div>
    );
  }
}
        
        
export default Home;