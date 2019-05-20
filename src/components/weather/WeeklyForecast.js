import React from 'react';
import Forecast from './../weather/Forecast.js';

import '../../styles/components/weather/_forecast.scss';

export default function WeeklyForecast({ forecast }) {
	return (
		<React.Fragment>
			<div className='forecast-list'>
				{
					forecast.map((timeframe) => (
						<Forecast key={timeframe.dt} forecast={timeframe} forecastTime='week'/>
					))
				}
			</div>
		</React.Fragment>
	)
}