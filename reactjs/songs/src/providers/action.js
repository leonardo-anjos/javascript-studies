// action creator
export const selectSongs = song => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

