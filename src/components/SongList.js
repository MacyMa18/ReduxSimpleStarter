import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song, i) => {
      return (
        <div key={i} className="item">
          <div className="song-title">{song.title}</div>
          <div className="right-button">
            <button
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong,
  }
)(SongList);
