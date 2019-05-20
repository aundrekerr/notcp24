import React from 'react';
import '../../styles/components/weather/_city-select.scss';

export default class CitySelect extends React.Component {

	render() {
		const { currentLocation, cityList, changeCity } = this.props;
		return (
			<React.Fragment>
				<select className='city-select' onChange={changeCity} value={currentLocation}>
					{
						cityList.map((city) => (
							<option key={city.id} value={city.id}>{city.name}</option>
						))
					}
				</select>
				<span className='helper'></span>
			</React.Fragment>
		)
	}
}