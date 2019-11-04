import Song from '@/model/song';
import actions from './actions';
import mutations from './mutations';
import { SEQUENCE } from '@/config';

const state = {
  playState: false,
  fullscreen: false,
  loading: false,
  index: -1,
  songs: [],
  mode: SEQUENCE,
  way: '',
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
