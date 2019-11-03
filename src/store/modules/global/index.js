import { UPDATE_BOTTOM } from './mutation-types';

const state = {
  bottom: '0px',
};

const mutations = {
  [UPDATE_BOTTOM](state, payload) {
    state.bottom = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
