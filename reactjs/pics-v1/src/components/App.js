import React from 'react';
import SearchBar from "./SearchBar";

export class App extends React.Component {
	
	render() {
		return(
			<div className="ui container" style={{marginTop: '30px'}}>
				<SearchBar />
			</div>
		);
	}

};
