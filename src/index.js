import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyAF0k00HNVntnqGQhax1auOh4E0dHPH4BY";

//class create a new component. components produce html. When a component is created it is a class/type of component ie many instances of App can be rendered

class App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'captain beefheart'}, (videos) => {
    this.setState({ videos: videos })
    console.log(videos);
    })
  }

    render() {
      // prop: pass data from parent component App to child <VideoList> with this.state.videos
      return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos}/>
    </div>
    );
  }
}

//take components generated html and render on page(in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));