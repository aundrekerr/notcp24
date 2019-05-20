import React from 'react';
import Loading from './loading/Loading.js';
import Newsfeed from './news/Newsfeed.js';

import { fetchNewsFeed } from '../utils/api';

import '../styles/components/news/_newsfeed.scss';


/**
 * Component responsible for rendering the newsfeed.
 */
export default class News extends React.Component {

	state = {
		activeTab: 'local',
		newsfeeds: {
			'local': null,
			'world': null,
			'entertainment': null,
			'sports': null,
			'lifestyle': null
		}
	}

	componentDidMount() {
		fetchNewsFeed(this.state.activeTab)
			.then((data) => {
				this.setState(prevState => ({
					activeTab: this.state.activeTab,
					newsfeeds: {
						...prevState.newsfeeds,
						[this.state.activeTab]: data
					}
				}))
			});
	}

	componentDidUpdate() {

	}

	newActiveTab = (tab) => {
		this.setState({
			activeTab: tab
		})

		fetchNewsFeed(tab)
			.then((data) => {
				this.setState(prevState => ({
					newsfeeds: {
						...prevState.newsfeeds,
						[this.state.activeTab]: data
					}
				}))
			});
	}

	render() {
		const { activeTab, newsfeeds, newActiveTab } = this.state;

		return(
			<div className="news__wrapper">
				<nav className="news-tabs__wrapper">
					<h5 className='title-block light'><span>Latest News</span></h5>
					<ul>
						{
							(Object.keys(newsfeeds)).map((tab, index) => (
								<li key={index} 
									className={
										tab === this.state.activeTab
											? 'clickable active'
											: 'clickable'
									}
									onClick={() => this.newActiveTab(tab)}>
									<span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
								</li>
							))
						}
					</ul>
				</nav>
				{	
					newsfeeds[activeTab] === null 
					? <Loading template='newsfeed'/>
					: <Newsfeed newsfeed={newsfeeds[activeTab]} />
				}
			</div>
		)
	}
}