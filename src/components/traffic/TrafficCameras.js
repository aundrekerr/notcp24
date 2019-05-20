import React from 'react';
import Flickity from 'react-flickity-component';

import '../../styles/components/traffic/_traffic-cameras.scss';

/**
 * Component responsible for rendering the traffic components.
 */
export default class TrafficCameras extends React.Component {
	state = {

	}

	componentDidUpdate() {
		if (this.flkty.selectedIndex !== this.props.camIndex) {
			this.flkty.select(this.props.camIndex, null, true)
		}
	}

	changeCameraIndex = (newIndex) => {
		if (newIndex !== this.flkty.selectedIndex) {
			this.flkty.select(newIndex)
		}
	}

	render() {
		const { roads/*, camIndex*/ } = this.props;
		const opts = {
			pageDots: false,
			prevNextDots: false,
			lazyLoad: true,
			// adaptiveHeight: true
		}

		return (
			<div className="camera-slider__wrapper">
				<Flickity
					flickityRef={c => this.flkty = c}
					className={'carousel'} 
					elementType={'div'}
					reloadOnUpdate 
					options={opts} >	
					{
						roads.map((cam, index) => (
							<div key={cam.Id}  className="carousel-cell">
								<img 
									src={process.env.PUBLIC_URL + `/images/cam-placeholder.png`} 
									className='cam-main' 
									data-flickity-lazyload={cam.Url}
									alt='' />
								<img 
									src={process.env.PUBLIC_URL + `/images/cam-placeholder.png`} 
									className='cam-background' 
									data-flickity-lazyload={cam.Url}
									alt='' />
								<div className="cam-title title-block">{cam.Name}</div>
							</div>
						))
					}
				</Flickity>
			</div>
		)
	}
}