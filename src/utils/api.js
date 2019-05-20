const { REACT_APP_WEATHER_API_KEY, REACT_APP_YOUTUBE_API_KEY } = process.env;

var convert = require('xml-js');

/**
 * Weather APIs requests.
 */
export function fetchForecast ( locationID ) {
	const endpoint = `http://api.openweathermap.org/data/2.5/forecast?id=${locationID}&APPID=${REACT_APP_WEATHER_API_KEY}&units=metric`;

	return fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.warn(error)
			return null
		});
}

export function fetchCityList ( ) {
	const endpoint = `http://api.openweathermap.org/data/2.5/group?id=6167865,6091104,5950267,6122091,6066513,6087701,6173577,6075357,5907364,5882873,6094578,6104111,6092122,5911592,6074375,5906831,5888377,5913424,6172932,5969782&APPID=${REACT_APP_WEATHER_API_KEY}&units=metric`;

	return fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			let city_list = [];

			data.list.map((city) => {
				const { id, name } = city;
				return city_list.push({id: id, name: name});
			});
			
			return city_list;
		})
		.catch((error) => {
			console.warn(error)
			return null
		});
}




/**
 * YouTube API requests.
 */
export function fetchYouTubeVideos ( channel ) {
	const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_YOUTUBE_API_KEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=12`;

	return fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const video_list = data.items;
			return video_list;
		})
		.catch((error) => {
			console.warn(error)
			return null
		});
}





/**
 * Newsfeed requests.
 */
export function fetchNewsFeed ( feed ) {
	const endpoints = {
			'local': 'https://toronto.ctvnews.ca/rss/ctv-news-toronto-1.822319',
			'world': 'https://www.ctvnews.ca/rss/ctvnews-ca-world-public-rss-1.822289',
			'entertainment': 'https://www.ctvnews.ca/rss/ctvnews-ca-entertainment-public-rss-1.822292',
			'sports': 'https://www.ctvnews.ca/rss/sports/ctv-news-sports-1.3407726',
			'lifestyle': 'https://www.ctvnews.ca/rss/lifestyle/ctv-news-lifestyle-1.3407722'
		};

	return fetch(endpoints[feed])
		.then(response => response.text())
		.then(str => {
			const newJson = convert.xml2json(str, {compact: true, spaces: 4})
			const news = JSON.parse(newJson)
			return news.rss.channel.item;
		})
		.catch((error) => {
			console.warn(error)
			return null
		});

}






/**
 * Camera requests.
 */
export function fetchCameras ( ) {
	const endpoint = 'https://aundrekerr.com/yoink/index.php?url=https://511on.ca/api/v2/get/cameras';

	return fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.warn(error)
			return null
		});
}





