import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    //if resolves id error on index. if no video is loaded return div and nothing else
    if (!video) {
        return <div>Loading..</div>
    }

    const videoId = video.id.videoId;
    //string interpolation using backticks and $ to add videoId to url
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
          <div className='embed-responsive embed-responsive-16by9'>
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>

          <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        </div>
    );
};

export default VideoDetail;