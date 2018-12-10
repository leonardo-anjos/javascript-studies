import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <h1>Hi! welcome...</h1>
      <h4>this is my first app in reactjs</h4>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

