import React from 'react';

export default class SearchBar extends React.Component {
	
	render() {
		return(
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							onChange={this.onInputChange}
							onClick={this.onInputClick}
						/>
					</div>
				</form>
			</div>
		);
	}

	onInputChange(event) {
		console.log('change text...');
		console.log(event.target.value);
	}

	onInputClick() {
		console.log('clicked on form...');
	};

}