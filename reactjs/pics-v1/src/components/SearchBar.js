import React from 'react';

export default class SearchBar extends React.Component {
	
	state = {
		term: ''
	}

	render() {
		return(
			<div className="ui segment">
				<form 
					className="ui form"
					onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							onChange={(e) => this.setState({ term: e.target.value})}
							onClick={this.onInputClick}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}

	onInputClick() {
		console.log('clicked on form...');
	};


	onFormSubmit = event => {
		event.preventDefault();
		console.log(this.state.term);
	};

}