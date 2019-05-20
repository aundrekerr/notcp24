import React from 'react';

import Header from './Header.js';
import Weather from './Weather.js';
import Video from './Video.js';
import News from './News.js';
import Traffic from './Traffic.js';



function App() {
	return (
		<div className="cp24-app__wrapper">
			<Header />
			<Video />
			<Weather />
			<News />
			<Traffic />
		</div>
	);
}

export default App;
