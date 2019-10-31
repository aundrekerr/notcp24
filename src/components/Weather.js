import React from 'react';
import Loading from './loading/Loading.js';
import DailyForecast from './weather/DailyForecast.js';
import WeeklyForecast from './weather/WeeklyForecast.js';
import CitySelect from './weather/CitySelect.js';

import { fetchForecast, fetchCityList } from '../utils/api';


const CitySelectContext = React.createContext();

/**
 * Component responsible for rendering weather component.
 */
export default class Weather extends React.Component {
	
	/** Default location id is Toronto.  **/
	state = {
		forecastToggle: 'day',
		weekForecast: null,
		dayForecast: null,
		cityList: null,
		currentLocationId: 6167865 
	}

	componentDidMount() {
		/** Gets list of cities for <select> element.  **/
		fetchCityList()
			.then((data) => {
				this.setState({
					cityList: data
				})
			})

		/** Grabs forecast data for the day and week. **/
		fetchForecast(this.state.currentLocationId)
			.then((forecast) => {

				/** Filter out forecasts for the day. **/
				const day = forecast.list.filter(function(value, index, Arr) {
					return index % 2 === 0;
				});

				day.length = 5;

				this.setState({
					dayForecast: day
				});

				/** Filter out forecasts for the week. **/
				const firstHour = (new Date(forecast.list[0].dt * 1000)).getHours();

				const week = (forecast.list).filter(obj => {
					const date = new Date(obj.dt * 1000)
					const hour = date.getHours();

					if (firstHour <= 5 && firstHour >= 19) {
						if (hour === firstHour){ return obj; }
					} else {
						if (hour === 17){ return obj; }
					}
				})

				this.setState({
					weekForecast: week
				});
			});
	}

	/** Toggle the forecast displayed. **/
	toggleForecast = () => {
		this.setState(({forecastToggle}) => ({
			forecastToggle: forecastToggle === 'day' ? 'week' : 'day'
		}))
	}

	/** Handle changing the city displayed. **/
	changeCity = (e) => {
		this.setState({
			currentLocationId: e.target.value
		});

		/** Grabs forecast data for the day and week. **/
		fetchForecast(parseInt(e.target.value))
			.then((forecast) => {

				/** Filter out forecasts for the day. **/
				const day = forecast.list.filter(function(value, index, Arr) {
					return index % 2 === 0;
				});

				day.length = 5;

				this.setState({
					dayForecast: day
				});

				/** Filter out forecasts for the week. **/
				const firstHour = (new Date(forecast.list[0].dt * 1000)).getHours();

				const week = (forecast.list).filter(obj => {
					const date = new Date(obj.dt * 1000)
					const hour = date.getHours();

					if (firstHour <= 5 && firstHour >= 19) {
						if (hour === firstHour){ return obj; }
					} else {
						if (hour === 17){ return obj; }
					}
				})

				this.setState({
					weekForecast: week
				});
			});
	}

	render() {
		const { forecastToggle, weekForecast, dayForecast, currentLocationId, cityList, checkTime, changeCity } = this.state;

		return (
			<div className="forecast__wrapper">
				<CitySelectContext.Provider value={this.state.currentLocationId}>
					{ 
						cityList === null
							? <Loading template='forecast-city-select'/>
						
							: <div className="city-select__wrapper">
								{ forecastToggle === 'week'
									? <h5 className='title-block light clickable' onClick={this.toggleForecast}><span>Forecast - Weekly</span></h5>
									: <h5 className='title-block light clickable' onClick={this.toggleForecast}><span>Forecast - Daily</span></h5>
								}

								<CitySelect 
									cityList={cityList} 
									currentLocation={currentLocationId} 
									changeCity={this.changeCity} /> 
							</div>	
					}
				</CitySelectContext.Provider>
				{ 
					forecastToggle === 'day'
						? dayForecast === null 
							? <Loading template='forecast-list'/>
							: <DailyForecast 
								forecast={dayForecast} 
								checkTime={this.checkTime} 
								toggleForecast={this.toggleForecast} /> 
						: weekForecast === null 
							? <Loading template='forecast-list'/>
							: <WeeklyForecast 
								forecast={weekForecast} 
								checkTime={this.checkTime} 
								toggleForecast={this.toggleForecast} /> 
				}
			</div>
		)
	}
}