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

    this.state = { 
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('dogs');
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

      return (
    <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
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