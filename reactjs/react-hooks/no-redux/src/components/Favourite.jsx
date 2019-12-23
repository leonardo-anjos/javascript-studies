import React from 'react';
import { Store } from '../providers/Store';

const List = React.lazy(() => import('./List'));

export function Favourite() {
  const { state, dispatch } = React.useContext(Store);

  const props = {
    episodes: state.favourites,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  } 

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className='episode-layout'>
        <List {...props} />
      </section>
    </React.Suspense>
  );

}