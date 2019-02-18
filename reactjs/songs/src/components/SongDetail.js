import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div 
      style={{ 
        textAlign: 'center' , 
        fontWeight: 'bold'
      }}>
        Select a song
    </div>;
  }

  return (
    <div 
      style={{ 
        textAlign: 'center' , 
        marginTop: '20%'
    }}>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Band: {song.band}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);