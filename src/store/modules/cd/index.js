import axios from 'axios';
import {
  BATCH_ADD,
  UPDATE_SONGS_DATA,
  UPDATE_RESERVE,
  UPDATE_INDEX,
  UPDATE_MORE,
} from './mutation-types';
import { cdListParam, SUCCESS } from '@/config';
import Cd from '@/model/cd';
import Song from '@/model/song';

const state = {
  cds: [],
  count: 20,
  index: {},
  reserve: {},
  mores: {},
};

const getters = {
  find: state => id => state.cds.find(cd => cd.id === id),
};

const actions = {
  getCdList({ commit }) {
    return axios.get('/api/cdList', { params: cdListParam })
      .then((res) => {
        if (res.data.code === SUCCESS) {
          const cdList = res.data.data.list.map(item => new Cd({
            id: item.dissid,
            author: { name: item.creator.name },
            desc: item.dissname,
            image: item.imgurl,
          }));
          commit(BATCH_ADD, cdList);
        }
      })
      .catch(e => Promise.reject(e));
  },
  getCdDetail({ commit }, id) {
    return axios.get('/api/cdDetail', { params: { id } })
      .then((res) => {
        const songs = res.data.cdlist[0].songlist.map(song => new Song({
          authors: song.singer.map(singer => singer.name),
          songmid: song.mid,
          albumname: song.album.name,
          albummid: song.album.mid,
          songname: song.name,
          interval: song.interval,
        }));
        commit(UPDATE_RESERVE, { songs, id });
        commit(UPDATE_INDEX, id);
        commit(UPDATE_MORE, id);
        commit(UPDATE_SONGS_DATA, id);
      });
  },
};

const mutations = {
  [BATCH_ADD](state, payload) {
    state.cds = payload;
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
    const cd = state.cds.find(cd => cd.id === payload);
    const reserve = state.reserve[payload];
    const index = state.index[payload];
    cd.songs = [...cd.songs, ...reserve.slice(index * state.count, (index + 1) * state.count)];
    state.index = { ...state.index, [payload]: index + 1 };
    if (cd.songs.length === reserve.length) state.mores = { ...state.mores, [payload]: false };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
