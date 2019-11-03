import { UPDATE_SHOW } from './mutation-types';

const state = {
  show: false,
};

const mutations = {
  [UPDATE_SHOW](state, payload) {
    state.show = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
