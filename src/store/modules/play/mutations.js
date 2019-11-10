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
  UPDATE_RECENT_PLAYBACK,
  UPDATE_SONG_LOVE,
} from './mutation-types';
import { RECENT_PLAYBACK, LOVE } from '@/config';

export default {
  [ADD](state, payload) {
    const index = state.songs.findIndex(song => song.songmid === payload.songmid);
    if (index === -1) {
      state.songs = [...state.songs, payload];
      const song = state.loves.find(song => song.songmid === payload.songmid);
      state.songs[state.songs.length - 1].love = !!song;
    }
    state.index = index === -1 ? state.songs.length - 1 : index;
    state.fullscreen = true;
    state.playState = true;
    const s = state.songs[state.index];
    s.audioSrc = payload.audioSrc;
    s.lyric = payload.lyric;
  },
  [CHOOSE](state, payload) {
    state.index = state.songs.findIndex(song => song.songmid === payload.songmid);
    state.playState = true;
  },
  [BATCH_ADD](state, { songs, index }) {
    state.index = index;
    state.songs = songs;
    state.fullscreen = true;
    state.playState = true;
    state.songs.forEach((song, i) => {
      const cache = state.loves.find(s => s.songmid === song.songmid);
      if (cache) {
        const s = state.songs[i];
        s.love = true;
        s.audioSrc = cache.audioSrc;
        s.lyric = cache.lyric;
      }
    });
  },
  [DELETE](state, payload) {
    state.songs = state.songs.filter((song, index) => index !== payload);
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
  [UPDATE_SONG_AUDIOSRC](state, { vkey, filename }) {
    const song = state.songs[state.index];
    song.audioSrc = `http://ws.stream.qqmusic.qq.com/${filename}?guid=7761666132&vkey=${vkey}`;
  },
  [UPDATE_SONG_CANPLAY](state, payload) {
    const song = payload;
    song.canplay = false;
  },
  [UPDATE_SONG_LYRIC](state, payload) {
    const song = state.songs[state.index];
    song.lyric = payload;
  },
  [UPDATE_SONG_LOVE](state, payload) {
    const song = state.songs.find(song => song.songmid === payload.songmid);
    song.love = !song.love;
    const index = state.loves.findIndex(s => s.songmid === song.songmid);
    if (song.love && index === -1) state.loves.push(song);
    if (!song.love) state.loves.splice(index, 1);
    localStorage.setItem(LOVE, JSON.stringify(state.loves));
  },
  [UPDATE_LOADING](state, payload) {
    state.loading = payload;
  },
  [TOGGLE](state, payload) {
    state.index = payload;
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
  [UPDATE_RECENT_PLAYBACK](state, payload) {
    state.recentPlay = [payload, ...state.recentPlay];
    localStorage.setItem(RECENT_PLAYBACK, JSON.stringify(state.recentPlay));
  },
};
