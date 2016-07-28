//when importing libraries use name of library, when importing components, use relative path

import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyAF0k00HNVntnqGQhax1auOh4E0dHPH4BY";

//class create a new component. components produce html. When a component is created it is a class/type of component ie many instances of App can be rendered
console.log(youtube_Api)

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('');
}


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
        });
      });
    }



    render() {
      // prop: pass data from parent component App to child <VideoList> with this.state.videos

      //onVideoSelect updates app's state using this.setState

      //"throttle down" onSearchTermChange search function using lodash library "debounce";
      const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

      return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos}/>
    </div>
    );
  }
}

//take components generated html and render on page(in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
