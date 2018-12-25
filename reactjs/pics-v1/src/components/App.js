import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

export default class App extends React.Component {
	
	state = {
		images: []
	}
	
	onSearchSubmit = async (term) => {
		console.log(term);
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID 53be290af7a7f60340b943bd3085b23495ce40e287e198fec79fe88961698e98'
			}
		});

		console.log(this); 
		this.setState({ images: response.data.results })
		console.log(response.data.results);
	
	}

	render() {
		return(
			<div className="ui container" style={{marginTop: '30px'}}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Found: {this.state.images.length} images
			</div>
		);
	}

};
