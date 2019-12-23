import React from 'react';
import { Store } from '../providers/Store';

export default function List(props) {
	const { episodes, toggleFavAction, favourites } = props;

	return episodes.map(episode => {
		return (
			<section key={episode.id} className='episode-box'>
				<img
					src={episode.image.medium}
					alt={`Rick and Morty ${episode.name}`}
				/>
				<div>{episode.name}</div>
				<section style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						Season: {episode.season} Number: {episode.number}
					</div>
					{/* adding favourites */}
					<button type="button" onClick={() => toggleFavAction(episode)}>
						{state.favourites.find(fav => fav.id === episode.id) ? 'un favourite' : 'favourite'}
					</button>
				</section>
			</section>
		);
	});
}