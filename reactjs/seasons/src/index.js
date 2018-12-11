// developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err),
  );
  
  return(
    <div>
      <h3>MySeasons Locator</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
