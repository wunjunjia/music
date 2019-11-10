import {
  UPDATE_CONFIRM_SHOW,
  UPDATE_CONFIRM_TITLE,
  UPDATE_CONFIRM_EXECUTE,
} from './mutation-types';

const state = {
  show: false,
  title: '',
  execute: () => {},
};

const mutations = {
  [UPDATE_CONFIRM_SHOW](state, paylaod) {
    state.show = paylaod;
  },
  [UPDATE_CONFIRM_TITLE](state, payload) {
    state.title = payload;
  },
  [UPDATE_CONFIRM_EXECUTE](state, payload) {
    state.execute = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
