import Song from '@/model/song';
import actions from './actions';
import mutations from './mutations';
import { SEQUENCE, RECENT_PLAYBACK, LOVE } from '@/config';

const state = {
  playState: false,
  fullscreen: false,
  loading: false,
  index: -1,
  songs: [],
  mode: SEQUENCE,
  recentPlay: JSON.parse(localStorage.getItem(RECENT_PLAYBACK) || '[]'),
  loves: JSON.parse(localStorage.getItem(LOVE) || '[]'),
};

const getters = {
  song: state => (state.index === -1 ? new Song({}) : state.songs[state.index]),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
