import React from 'react';
import { connect } from 'react-redux';

export class SongList extends React.Component {
  render() {
    return <div>SongList</div>
  }
}

export default connect()(SongList)