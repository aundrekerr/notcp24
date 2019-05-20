import React from 'react';
import Moment from 'react-moment';
import '../../styles/components/weather/_forecast-extra.scss';

export default class Forecast extends React.Component {
	state = {
		showExtra: 'hide'
	}

	/** Return the compass point for the deg. value passed. **/
	getWindDegrees = (deg) => {
		switch (true){
			/**
			 * North.
			 */
			case (deg >= 354.375 || deg <= 5.625):return 'N';
			case (deg > 5.625 && deg <= 16.875): return 'NbE';
			case (deg > 16.875 && deg <= 28.125): return 'NNE';
			case (deg > 28.125 && deg <= 39.375): return 'NEbN';

			/** North East. **/
			case (deg > 39.375 && deg <= 50.625): return 'NE';
			case (deg > 50.625 && deg <= 61.875): return 'NEbE';
			case (deg > 61.875 && deg <= 73.125): return 'ENE';
			case (deg > 73.125 && deg <= 84.375): return 'EbN';

			/**
			 * East.
			 */
			case (deg > 84.375 && deg <= 95.625): return 'E';
			case (deg > 95.625 && deg <= 106.875): return 'EbS';
			case (deg > 106.875 && deg <= 118.125): return 'ESE';
			case (deg > 118.125 && deg <= 129.375): return 'SEbE';

			/** South East. **/
			case (deg > 129.375 && deg <= 140.625): return 'SE';
			case (deg > 140.625 && deg <= 151.875): return 'SEbS';
			case (deg > 151.875 && deg <= 163.125): return 'SSE';
			case (deg > 163.125 && deg <= 174.375): return 'SbE';

			/**
			 * South.
			 */
			case (deg > 174.375 && deg <= 185.625): return 'S';
			case (deg > 185.625 && deg <= 196.875): return 'SbW';
			case (deg > 196.875 && deg <= 208.125): return 'SSW';
			case (deg > 208.125 && deg <= 219.375): return 'SWbS';

			/** South West. **/
			case (deg > 219.375 && deg <= 230.625): return 'S';
			case (deg > 230.625 && deg <= 241.875): return 'SWbW';
			case (deg > 241.875 && deg <= 253.125): return 'WSW';
			case (deg > 253.125 && deg <= 264.375): return 'WbS';

			/**
			 * West.
			 */
			case (deg > 264.375 && deg <= 275.625): return 'W';
			case (deg > 275.625 && deg <= 286.875): return 'WbN';
			case (deg > 286.875 && deg <= 298.125): return 'WNW';
			case (deg > 298.125 && deg <= 309.375): return 'NWbN';


			/** North West. **/
			case (deg > 309.375 && deg <= 320.625): return 'W';
			case (deg > 320.625 && deg <= 331.875): return 'WbN';
			case (deg > 331.875 && deg <= 343.125): return 'WNW';
			case (deg > 343.125 && deg <= 354.375): return 'NWbN';

			default:
				return '!';
		}
	}

	/** Sets the forecast timeframe's title depending on time returned. **/
	checkTime = (time) => {
		const date = new Date(time * 1000)
		const hour = date.getHours();

		switch (hour){
			case 0: 
			case 1: 
			case 2: 
			case 3: 
			case 4: 
			case 5: 
				return 'NITE';

			case 6: 
			case 7: 
			case 8: 
			case 9: 
			case 10: 
			case 11: 
			case 12: 
				return 'MORN';
			
			case 13: 
			case 14: 
			case 15: 
			case 16: 
			case 17: 
			case 18: 
			case 19: 
				return 'AFT';
			
			case 20: 
			case 21: 
			case 22: 
			case 23: 
			case 24: 
			case 25: 
			case 26: 
				return 'EVE';

			/** Need a better default. **/
			default:
				return "YERRRRRR"

		}
	}

	/** Toggle class for the forecast-extra div. **/
	toggleExtra = () => {
		this.setState(({showExtra}) => ({
			showExtra: showExtra === 'hide' ? 'show' : 'hide'
		}))
	}

	render(){
		const { showExtra } = this.state, { forecast, forecastTime } = this.props;
		return (
			<React.Fragment>

				<div className={`forecast ${showExtra}`} onClick={() => this.toggleExtra(showExtra)}>
					<span className='forecast-time'>
						{
							forecastTime === 'week'
								? <Moment format="ddd">{forecast.dt_txt}</Moment>
								: this.checkTime(forecast.dt)
						}
					</span>
					<div className="forecast-icon"><img src={process.env.PUBLIC_URL + '/images/weather-icons/' + forecast.weather[0].icon + '.png'} alt={forecast.weather[0].description} /></div>
					<div className='forecast-info'>
						<span className='temperature'>{ Math.round(forecast.main.temp) }</span>
					</div>

					<div className="forecast-extra">
						<span className='forecast-time'>
							{
								forecastTime === 'week'
									? <Moment format="dddd">{forecast.dt_txt}</Moment>
									: this.checkTime(forecast.dt)
							}
						</span>
						<div className="forecast-extra__content">
							<div className="temperature">
								<div className="icon"><img src={process.env.PUBLIC_URL + '/images/weather-icons/' + forecast.weather[0].icon + '.png'} alt={forecast.weather[0].description} /></div>
								<span>{forecast.main.temp}<sup>℃</sup></span>
							</div>
							<ul>
								<li className='description'>{forecast.weather[0].description}</li>
								<li className='wind'>
									<span className="speed">{Math.round(forecast.wind.speed * 3.6)}<sup>km/h</sup><span className="direction">{this.getWindDegrees(forecast.wind.deg)}</span></span>
								</li>
								<li className='humidity'><span>{forecast.main.humidity}<sup>%</sup></span></li>
							</ul>
						</div>
					</div>
				</div>

			</React.Fragment>
		)
	}
}