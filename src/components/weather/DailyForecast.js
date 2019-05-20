import React from 'react';
import Forecast from './../weather/Forecast.js';

import '../../styles/components/weather/_forecast.scss';

export default function DailyForecast({ forecast, checkTime, toggleForecast, forecastExtra, toggleForecastExtra }) {
	return (
		<div className='forecast-list'>
			{
				// forecast.map((timeframe) => (

				// 	<div key={timeframe.dt} className='forecast' onClick={toggleForecastExtra}>
				// 		<span className='forecast-time'>{ checkTime(timeframe.dt) }</span>
				// 		<div className="forecast-icon"><img src={process.env.PUBLIC_URL + '/images/weather-icons/' + timeframe.weather[0].icon + '.png'} alt={timeframe.weather[0].description} /></div>
				// 		<div className='forecast-info'>
				// 			<span className='temperature'>{ Math.round(timeframe.main.temp) }</span>
				// 		</div>

						
				// 	</div>
				// ))

				forecast.map((timeframe) => (
					<Forecast key={timeframe.dt} forecast={timeframe} forecastTime='day'/>
				))
			}
		</div>
	)
}