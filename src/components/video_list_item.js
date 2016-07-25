import React from 'react';

const VideoListItem = (props) => {
    const onVideoSelect = props.onVideoSelect
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    // console.log(video);

    // onVideoSelect is passed down from videoList; on click onVideoSelect function is called and passed specific video
    
    return (
        <li onClick={() => onVideoSelect(video)}className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl} />
            </div>

            <div className ='media-body'>
              <div className="media=heading">{video.snippet.title}</div>
            </div>
          </div>
        </li>
    );
};

export default VideoListItem;