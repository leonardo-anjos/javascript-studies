import React from 'react';
import unsplash from '../api/unsplhash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';
import '../style/App.css'

export default class App extends React.Component {
	
	state = {
		images: []
	}
	
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: response.data.results })
	}

	render() {
		return(
			<div className="ui container" style={{marginTop: '30px'}}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images}/>
			</div>
		);
	}

};
