import React from 'react';

import '../../styles/components/video/_video-list.scss';

export default function VideoList({ videos, loadNewVideo, toggleView, viewStatus }) {
	return (
		<div className={`video-list__wrapper ${viewStatus}`}>
			<div className="video-list__extra-wrapper">
				<div className="video-list">
					{
						videos.map((video, index) => (
							<div key={video.id.videoId} className="video-list__item" onClick={ (event) => {loadNewVideo(event, index); toggleView(); }}>
								<div className="image-wrap"><img src={video.snippet.thumbnails.high.url} alt='' /></div>
								<h4><span dangerouslySetInnerHTML={{__html: decodeURI(video.snippet.title) }} /></h4>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
	
}