import React from 'react';
import { Store } from './providers/Store';
import { Link } from '@reach/router';

export function App(props) {

  const { state } = React.useContext(Store);
  
  return(
    <React.Fragment>
      <header>
        <div className="header">
          <h1>Rick and Morty</h1>
          <h1>Pick your favourite episodes</h1>
        </div>
        <div>
          <Link to='/'>home</Link>{' '}
          <Link to='/favourites'>favourites {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );

}
