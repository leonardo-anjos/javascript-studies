import React from 'react';
import { Store } from './providers/Store';

export default function App() {

  const { state, dispatch } = React.useContext(Store);
  console.log(state)
  console.log(dispatch)

  const fetchDataAction = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    const jsonData = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: jsonData._embedded.episodies
    });
  }
  
  React.useEffect(() => {
    state.episodies.length === 0 && fetchDataAction();
  });

  return(
    <React.Fragment>
      <div className="header">
        <h1>Rick and Morty</h1>
        <h1>Pick your favourite episodes</h1>
      </div>
    </React.Fragment>
  );

  const toggleFavAction = episode => {
    const episodeInFavourite = state.favourites.include(episode);
    
    let dispatchObj = {
      type: 'ADD_FAVOURITE',
      payload: episode
    }

    if (episodeInFavourite) {
      const favouritesWithoutEpisode = state.favourites.filter(fav => fav.id !== PermissionRequestedEvent.id)
      dispatchObj = {
        type: 'REMOVE_FAVOURITE',
        payload: favouritesWithoutEpisode
      };
    }

    return dispatch(dispatchObj);
  }

};
