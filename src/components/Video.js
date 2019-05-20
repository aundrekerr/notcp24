import React from 'react';
import YouTube from 'react-youtube';
import Loading from './loading/Loading.js';
import VideoList from './video/VideoList.js';
import VideoSelect from './video/VideoSelect.js';

import { fetchYouTubeVideos } from '../utils/api';

import '../styles/components/video/_video-player.scss';


/**
 * Component responsible for rendering the video player components.
 */
export default class Video extends React.Component {
	state = {
		playerToggle: 'desktop',
		viewStatus: 'hide',
		videoList: null,
		videoListIndex: 0,
		currentVideo: null,
		channels: {
			'CTV': 'UCi7Zk9baY1tvdlgxIML8MXg',
			'Global': 'UChLtXXpo4Ge1ReTEboVvTDg',
			'CityTV': 'UCVKAcQQCO8vv87Gk62SutAg',
			'CBC': 'UCuFFtHWoLl5fauMMD5Ww2jA'
		},
		currentChannel: 'CTV'
	}

	componentDidMount() {

		/** Get the 10 latest YouTube videos. **/
		// fetchYouTubeVideos( this.state.channels[this.state.currentChannel] )
		// 	.then((videos) => {
		// 		this.setState({
		// 			videoList: videos,
		// 			currentVideo: videos[this.state.videoListIndex].id.videoId
		// 		});
		// 	})
	}

	/** Load the previous video in the videoList array. **/
	prevVideo = (event) => {
		if ( this.state.videoListIndex > 0 ) {
			console.log('prev')
			this.setState({
				videoListIndex: this.state.videoListIndex - 1,
				currentVideo: this.state.videoList[this.state.videoListIndex - 1].id.videoId
			})
		}
	}

	/** Load the next video in the videoList array. **/
	nextVideo = (event) => {
		if ( this.state.videoListIndex < 11 ) {
			console.log('next')
			this.setState({
				videoListIndex: this.state.videoListIndex + 1,
				currentVideo: this.state.videoList[this.state.videoListIndex + 1].id.videoId
			})
		}
	}

	/** Manually load a video from the passed-in video ID. **/
	loadNewVideo = (event, index) => {
		this.setState({
			videoListIndex: index,
			currentVideo: this.state.videoList[index].id.videoId
		})
	}

	/** Toggle the video list selection. **/
	toggleView = () => {
		this.setState(({viewStatus}) => ({
			viewStatus: viewStatus === 'hide' ? 'show' : 'hide'
		}))
	}

	/** Toggle the video list selection. **/
	changeChannel = (e) => {

		this.setState({
			currentChannel: e.target.value,
			videoListIndex: 0,
		})

		/** Get the 10 latest YouTube videos. **/
		fetchYouTubeVideos( this.state.channels[e.target.value] )
			.then((videos) => {
				
				this.setState({
					videoList: videos,
					currentVideo: videos[0].id.videoId
				});
			})
	}

	render() {

		/** YouTube Iframe player parameters. **/
		const opts = {
			height: '390',
			width: '640',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1,
				controls: 1,
				mute: 1,
				modestbranding: 1,
				playsinline: 1
			}
		}

		const { videoList, currentVideo, viewStatus, currentChannel, channels } = this.state;


		return (
			<div className='video__wrapper'>
				{ 
					videoList === null 
						? <Loading template='video'/>
						: <React.Fragment>
							<div className="video-list__toggle" >
								<img onClick={() => this.toggleView()} src={process.env.PUBLIC_URL + '/images/streamline-icon-list-bullets@24x24.svg'} alt=''/>
							</div>
							<VideoSelect
								channels={channels}
								currentChannel={currentChannel}
								changeChannel={this.changeChannel} 
								prevVideo={() => this.prevVideo()}
								nextVideo={() => this.nextVideo()}
								/>
							<div className="video-container">
								<YouTube
									videoId={currentVideo}
									opts={opts}
									onEnd={this.nextVideo} />
							</div>
							<VideoList 
								videos={videoList}
								loadNewVideo={this.loadNewVideo}
								toggleView={this.toggleView}
								viewStatus={viewStatus} />
						</React.Fragment>
				 }
			</div>
		)
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		// event.target.pauseVideo();
	}
}