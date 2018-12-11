import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button } from 'antd';

const App = () => {
  return(
    <div>
      <h1>Hi! welcome...</h1>
      <h4>this is my first app in reactjs</h4>
    
      <div>
        <Input placeholder="Basic usage" />
        <Button type="primary">Primary</Button>
      </div>
      
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

