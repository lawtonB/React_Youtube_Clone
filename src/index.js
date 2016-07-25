import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyAF0k00HNVntnqGQhax1auOh4E0dHPH4BY";

//create a new component. components produce html. When a component is created it is a class/type of component ie many APP instances can be rendered

class App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, searchTerm: 'captain beefheart'}, (videos) => {
    this.setState({ videos: videos })
    console.log(videos);
    })
  }

    render() {
      // prop: pass data from parent component App to child <VideoList> with this.state.videos
      return (
    <div>
      <SearchBar />
       
      <VideoList videos={this.state.videos}/>
    </div>
    );
  }
}

//take components generated html and render on page(in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));