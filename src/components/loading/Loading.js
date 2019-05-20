import React from 'react';

import '../../styles/components/loading/_loading.scss';

/**
 * Component responsible for rendering loading states.
 */
export default class Loading extends React.Component {
	render() {
		const { template } = this.props;

		/**
		 * Video.
		 */
		if ( template === 'video' ) {
			return (<div className="loading-placeholder__wrapper"><VideoPlayer /></div>);
		}

		/**
		 * Weather.
		 */
		if ( template === 'forecast-city-select' ) {
			return (<div className="loading-placeholder__wrapper"><ForecastCitySelect /></div>);
		}

		if ( template === 'forecast-list' ) {
			return (<div className="loading-placeholder__wrapper"><ForecastList /></div>);
		}

		if ( template === 'traffic-intro' ) {
			return (<div className="loading-placeholder__wrapper"><TrafficIntro /></div>);
		}

		if ( template === 'camera-jump' ) {
			return (<div className="loading-placeholder__wrapper"><CameraJump /></div>);
		}

		if ( template === 'newsfeed' ) {
			return (<div className="loading-placeholder__wrapper"><Newsfeed /></div>);
		}

		// if ( template === 'video' ) {
		// 	return (<div className="loading-placeholder__wrapper"><VideoPlayer /></div>);
		// }

		// if ( template === 'video' ) {
		// 	return (<div className="loading-placeholder__wrapper"><VideoPlayer /></div>);
		// }

		return ('yerrrrrrrrrrr');
	}
}

/**
 * Video.
 */
function VideoPlayer() {
	return (
		<div className="loading__video">
			<span><img src={process.env.PUBLIC_URL + '/images/loading-icons/streamline-icon-vintage-tv-4@24x24.svg'} alt='Video Icon' /></span>
		</div>
	)
}

/**
 * Weather.
 */
function ForecastCitySelect() {
	return (
		<div className="loading__city-select">
			<div className="fake-title-block"></div>
			<div className="fake-select"></div>
		</div>
	)
}

function ForecastList() {
	return (
		<div className="loading__forecast-list">
			<div className="fake-forecast-block"></div>
			<div className="fake-forecast-block"></div>
			<div className="fake-forecast-block"></div>
			<div className="fake-forecast-block"></div>
			<div className="fake-forecast-block"></div>
			<span><img src={process.env.PUBLIC_URL + '/images/loading-icons/streamline-icon-rain-umbrella-sun@24x24.svg'} alt='Weather Icon' /></span>
		</div>
	)
}

function TrafficIntro() {
	return (
		<div className="loading__traffic-intro">
			<div className="fake-title-block"></div>
			<div className="fake-select"></div>
		</div>
	)
}

function CameraJump() {
	return (
		<React.Fragment>
			<div className="loading__camera-jump"></div>
			<div className="loading__camera-slider"></div>
			<span><img src={process.env.PUBLIC_URL + '/images/loading-icons/streamline-icon-road-traffic-lights@24x24.svg'} alt='Traffic Icon' /></span>
		</React.Fragment>
	)
}

function Newsfeed() {
	return (
		<div className="loading__newsfeed">
			<span><img src={process.env.PUBLIC_URL + '/images/loading-icons/streamline-icon-newspaper@24x24.svg'} alt='Newsfeed Icon' /></span>
		</div>
	)
}