import React from 'react';
import Autosuggest from 'react-autosuggest';
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
		suggestionSelected: false,
		trafficToggle: 'cameras',
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

	componentDidUpdate() {
		this.cameraElement.current.changeCameraIndex(this.state.camIndex);
	}

	handleSelectChange = (event) => {
		const newRoads = this.state.cameras.filter(cam => cam.RoadwayName === event.target.value && cam.Organization === "MTO");
		
		this.setState({
			roads: newRoads,
			currentRoadway: event.target.value,
			value: ''
		})
	}

	getInitialState() {
         return {
             currentRoadway: 'select'
         }
     }

	handleSelectChange(event){
		const newRoads = this.state.cameras.filter(cam => cam.RoadwayName === event.target.value && cam.Organization === "MTO");

		this.setState({
			roads: newRoads,
			currentRoadway: event.target.value,
			camIndex: 0,
			value: ''
		})
	}

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue
		});
	}

	onSuggestionsFetchRequested = ({ value }) => {
		const roadNames = this.state.roads.map(road => (road.Name))
		
		this.setState({
			suggestions: this.getSuggestions(value, roadNames)
		});
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	}

	onSuggestionSelected = (event, {suggestionValue}) => {
		const newIndex = this.state.roads.findIndex(e => e.Name === suggestionValue)
		
		this.setState({
			camIndex: newIndex,
			suggestionSelected: true,
			value: ''
		})
	}

	getSuggestions(value, roads) {
		const inputValue = value.trim().toLowerCase();
		return roads.filter(x => x.toLowerCase().includes(inputValue.toLowerCase()));
	}

	getSuggestionValue(suggestion) {
		return suggestion;
	}

	renderSuggestion(suggestion) {
		return (
			<span>{suggestion}</span>
		)
	}

	render() {
		const { loading, trafficToggle, roads, roadways, camIndex, currentRoadway, suggestions, value } = this.state;
		const inputProps = {
			placeholder: "Enter a road...",
			value,
			onChange: this.onChange
		};

		return (
			<div className="traffic__wrapper">
				<React.Fragment>
					<div className='traffic-intro__wrapper'>
					{
						!loading === false 
							? <Loading template='traffic-intro'/>
							: <React.Fragment>
								<h5 className='title-block light clickable'><span>Traffic Cameras</span></h5>
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
						? <Loading template='camera-jump' />
						: <div className="camera-jump__wrapper">
							<Autosuggest 
								suggestions={suggestions}
								onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
								onSuggestionsClearRequested={this.onSuggestionsClearRequested}
								onSuggestionSelected={this.onSuggestionSelected}
								getSuggestionValue={this.getSuggestionValue}
								renderSuggestion={this.renderSuggestion}
								inputProps={inputProps} 
								focusInputOnSuggestionClick={false}
							/>
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