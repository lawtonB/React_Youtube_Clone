import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
const videoItems = props.videos.map((video) => {
    //when using map to create a list React  requires a unique key; in this case the key is the unique etag property of video object
    return <VideoListItem key={video.etag} video={video} />
    });
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    )
}

export default VideoList;