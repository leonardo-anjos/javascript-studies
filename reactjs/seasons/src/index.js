import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null
    }
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ 
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      }
    );
  }
  
  render() {
    return(
      <div>
        <h2>MySeasons Locator</h2>
        <p>Latitude: { this.state.lat }</p>
        <p>Longitude: { this.state.long }</p>
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
