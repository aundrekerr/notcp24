import React from 'react';
import Loading from './loading/Loading.js';
import TrafficCameras from './traffic/TrafficCameras.js';

import { fetchCameras } from '../utils/api';

import '../styles/components/traffic/_traffic.scss';
import '../styles/components/traffic/_camera-select.scss';

/**
 * Component responsible for rendering the traffic components.
 */
export default class Traffic extends React.Component {

	constructor(props) {
		super(props);
		this.cameraElement = React.createRef();
	}

	state = {
		loading: true,
		cameras: {},
		camIndex: 0,
		roadways: [],
		roads: [],
		currentRoadway: 'select',
		value: '',
		suggestions: [],
		trafficToggle: 'cameras'
	}

	componentDidMount() {
		fetchCameras()
			.then((data) => {
				const cams = data.filter(cam => cam.Organization === "MTO");
				const roadways = [...(new Set(cams.map(({ RoadwayName }) => RoadwayName)))];
				const roads = data.filter(cam => cam.RoadwayName === "HWY 401" && cam.Organization === "MTO");
				const roadNames = roads.map(road => (road.Name))

				this.setState({
					loading: false,
					cameras: cams,
					roadways: roadways,
					roads: roads,
					currentRoadway: roadways[1],
					suggestions: roadNames
				})
			})


	}

	handleSelectChange = (event) => {
		const newRoads = this.state.cameras.filter(cam => cam.RoadwayName === event.target.value && cam.Organization === "MTO");
		
		this.setState({
			roads: newRoads,
			currentRoadway: event.target.value,
			value: ''
		})
	}

	render() {
		const { loading, trafficToggle, roads, roadways, camIndex, currentRoadway, suggestions, value } = this.state;

		return (
			<div className="traffic__wrapper">
				<React.Fragment>
					<div className='traffic-intro__wrapper'>
					{
						!loading === false 
						? <Loading template='camera-select'/>
						: trafficToggle === 'cameras'
							? <h5 className='title-block light clickable'><span>Traffic - Cameras</span></h5>
							: <h5 className='title-block light clickable'><span>Traffic - Routes</span></h5>
					}

					{
						!loading === false 
							? <Loading template='video'/>
							: <React.Fragment>
								<div className="camera-select__wrapper">
									<select onChange={this.handleSelectChange} value={this.currentRoadway}>
										{
											roadways.map((roadway, index) => (
												roadway === null 
													? null
													: <option key={index} value={roadway}>{roadway}</option>
											))
										}
									</select>
									<span className="helper"/>
								</div>
								
							</React.Fragment>
					}
					</div>
					
					{
						!loading === false
						? <Loading template='camera select'/>
						: <div className="camera-jump__wrapper">
							<ul>
								{roads.map((road, index) => (
									<li key={road.Id} onClick={() => this.cameraElement.current.changeCameraIndex(index)}>{road.Description}</li>
								))}
							</ul>
						</div>
					}

					<TrafficCameras 
						roads={roads}
						camIndex={camIndex}
						ref={this.cameraElement} />
				</React.Fragment>
			</div>
		)
	}
}