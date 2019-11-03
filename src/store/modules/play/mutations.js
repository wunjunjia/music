import {
  ADD,
  BATCH_ADD,
  DELETE,
  UPDATE_FULLSCREEN,
  UPDATE_INDEX,
  UPDATE_SONG_AUDIOSRC,
  UPDATE_PLAYSTATE,
  UPDATE_LOADING,
  UPDATE_SONG_CANPLAY,
  TOGGLE,
  CHOOSE,
  CLEAR,
  UPDATE_MODE,
  UPDATE_SONG_LYRIC,
} from './mutation-types';

export default {
  [ADD](state, payload) {
    const index = state.songs.findIndex(song => song.songmid === payload.songmid);
    if (index === -1) state.songs.push(payload);
    state.index = index === -1 ? state.songs.length - 1 : index;
    state.fullscreen = true;
    state.playState = true;
  },
  [BATCH_ADD](state, { songs, index }) {
    state.index = index;
    state.songs = songs;
    state.fullscreen = true;
    state.playState = true;
  },
  [DELETE](state, payload) {
    state.songs.splice(payload, 1);
    if (state.songs.length === 0) {
      state.index = -1;
      return;
    }
    if (payload < state.index) {
      state.index -= 1;
      return;
    }
    if (state.index === payload && state.index === state.songs.length) {
      state.index = 0;
    }
  },
  [UPDATE_FULLSCREEN](state, payload) {
    state.fullscreen = payload;
  },
  [UPDATE_INDEX](state, payload) {
    state.index = payload;
  },
  [UPDATE_PLAYSTATE](state, payload) {
    state.playState = payload;
  },
  [UPDATE_SONG_AUDIOSRC](state, payload) {
    const song = state.songs[state.index];
    song.audioSrc = `http://ws.stream.qqmusic.qq.com/C400${song.strMediaMid}.m4a?guid=7761666132&vkey=${payload}`;
  },
  [UPDATE_SONG_CANPLAY](state, payload) {
    const song = payload;
    song.canplay = false;
  },
  [UPDATE_SONG_LYRIC](state, payload) {
    const song = state.songs[state.index];
    song.lyric = payload;
  },
  [UPDATE_LOADING](state, payload) {
    state.loading = payload;
  },
  [TOGGLE](state, payload) {
    state.index = payload;
    state.playState = true;
  },
  [CHOOSE](state, payload) {
    state.index = state.songs.findIndex(song => song.songmid === payload.songmid);
    state.playState = true;
  },
  [CLEAR](state) {
    state.index = -1;
    state.songs = [];
    state.playState = false;
  },
  [UPDATE_MODE](state, payload) {
    state.mode = payload;
  },
};
