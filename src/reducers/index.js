import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No Diggity',
      duration: '4:03',
    },
    {
      title: 'All stars',
      duration: '5:03',
    },
    {
      title: 'Love',
      duration: '4:23',
    },
    {
      title: 'Macarena',
      duration: '4:09',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
