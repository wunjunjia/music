import { SUCCESS, rankListParam, rankDetailParam } from '@/config';
import { jsonp } from '@/utils';
import Rank from '@/model/rank';
import Song from '@/model/song';
import {
  BATCH_ADD,
  UPDATE_SONGS_DATA,
  UPDATE_RESERVE,
  UPDATE_INDEX,
  UPDATE_MORE,
} from './mutation-types';

const state = {
  ranks: [],
  count: 20,
  index: {},
  reserve: {},
  mores: {},
};

const getters = {
  find: state => id => state.ranks.find(rank => rank.id === id),
};

const actions = {
  getRankList({ commit }) {
    return jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', rankListParam)
      .then((res) => {
        if (res.code === SUCCESS) {
          const ranks = res.data.topList.map(rank => new Rank({
            id: String(rank.id),
            picUrl: rank.picUrl,
            topTitle: rank.topTitle,
            tops: rank.songList.map(song => song),
          }));
          commit(BATCH_ADD, ranks);
        }
      });
  },
  getRankDetail({ commit }, id) {
    return jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
        Object.assign({ topid: id }, rankDetailParam))
      .then((res) => {
        if (res.code === SUCCESS) {
          const songs = res.songlist.map(song => new Song({
            albummid: song.data.albummid,
            albumname: song.data.albumname,
            interval: song.data.interval,
            songmid: song.data.songmid,
            songname: song.data.songname,
            authors: song.data.singer.map(singer => singer.name),
          }));
          commit(UPDATE_RESERVE, { songs, id });
          commit(UPDATE_INDEX, id);
          commit(UPDATE_MORE, id);
          commit(UPDATE_SONGS_DATA, id);
        }
      });
  },
};

const mutations = {
  [BATCH_ADD](state, payload) {
    state.ranks = payload;
  },
  [UPDATE_RESERVE](state, { songs, id }) {
    state.reserve = { ...state.reserve, [id]: songs };
  },
  [UPDATE_INDEX](state, payload) {
    state.index = { ...state.index, [payload]: 0 };
  },
  [UPDATE_MORE](state, payload) {
    state.mores = { ...state.mores, [payload]: true };
  },
  [UPDATE_SONGS_DATA](state, payload) {
    const rank = state.ranks.find(rank => rank.id === payload);
    const reserve = state.reserve[payload];
    const index = state.index[payload];
    rank.songs = [...rank.songs, ...reserve.slice(index * state.count, (index + 1) * state.count)];
    state.index = { ...state.index, [payload]: index + 1 };
    if (rank.songs.length === reserve.length) state.mores = { ...state.mores, [payload]: false };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
