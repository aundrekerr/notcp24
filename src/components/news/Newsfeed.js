import React from 'react';

export default function Newsfeed({ newsfeed }) {
	return (
		
		<div className='newsfeed-list__wrapper'>
			<ul className='newsfeed-list'>
				{
					newsfeed.map((article) => (
						<li key={article.guid._text}>
							<a href={article.link._text} target='_blank' rel="noopener noreferrer">
								{article.title._cdata}
							</a>
						</li>
					))
					
				}
			</ul>
		</div>
	)
	
}