import React from 'react';
import Moment from 'react-moment';

import '../styles/layout/_header.scss';

export default class Header extends React.Component {

	render() {
		return (
			<header className="app__header">
				<div className="logo__wrapper"><img src={process.env.PUBLIC_URL + '/images/cp24-logo_white.png'} alt="CP24 Logo"/></div>
				<aside className="header-aside">
					<Moment format='ddd, MMM DD'>{new Date()}</Moment>
				</aside>
			</header>
		)
	}
}