import { combineReducers } from 'redux';

// song list
const songsReducer = () => {
  // data array songs 
  return [
    { title: 'What a beaultiful name', duration: '8:35'},
    { title: 'Broken vessels', duration: '5:50'},
    { title: 'Oceans', duration: '6:12'},
    { title: 'Good good father', duration: '4:05'}
  ]
};

// select song
const seletedSongReducer = (seletedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return seletedSong;
};

export default combineReducers({
  songs: songsReducer,
  seletedSong: seletedSongReducer
});