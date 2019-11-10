import {
  UPDATE_BOTTOM,
  UPDATE_SEARCH_HISTORY,
} from './mutation-types';
import { SEARCH_HISTORY } from '@/config';

const state = {
  bottom: '0px',
  searchHistory: JSON.parse(localStorage.getItem(SEARCH_HISTORY) || '[]'),
};

const mutations = {
  [UPDATE_BOTTOM](state, payload) {
    state.bottom = payload;
  },
  [UPDATE_SEARCH_HISTORY](state, payload) {
    if (Array.isArray(payload)) state.searchHistory = payload;
    else state.searchHistory = [payload, ...state.searchHistory];
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(state.searchHistory));
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
