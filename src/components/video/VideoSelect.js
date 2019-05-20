import React from 'react';
import '../../styles/components/video/_video-select.scss';

export default class VideoSelect extends React.Component {

	render() {
		const { currentChannel, changeChannel, channels, prevVideo, nextVideo } = this.props;		

		return (
			<div className="video-select__wrapper">
				<h5 className="title-block light"><span>More Videos</span></h5>
				<select className='video-select' onChange={changeChannel} value={currentChannel}>
					{
						(Object.keys(channels)).map((channel, index) => (
							<option value={channel} key={index}>{channel}</option>
						))
					}
				</select>
				<span className='helper'></span>
				<div onClick={() => prevVideo()} className="prev-button">
					<span><img src={process.env.PUBLIC_URL + '/images/video-icons/streamline-icon-controls-rewind@24x24.svg'} alt='Previous Button' /></span>
				</div>
				<div onClick={() => nextVideo()} className="next-button">
					<span><img src={process.env.PUBLIC_URL + '/images/video-icons/streamline-icon-controls-forward@24x24.svg'} alt='Next Button' /></span>
				</div>
			</div>
		)
	}
}
