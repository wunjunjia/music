import axios from 'axios';
import { BATCH_ADD, UPDATE_SONGS_DATA } from './mutation-types';
import { cdListParam, SUCCESS } from '@/config';
import Cd from '@/model/cd';
import Song from '@/model/song';

const state = {
  cds: [],
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
  getCdDetail({ commit }, payload) {
    return axios.get('/api/cdDetail', { params: { id: payload } })
      .then((res) => {
        const songs = res.data.cdlist[0].songlist.map(song => new Song({
          authors: song.singer.map(singer => singer.name),
          strMediaMid: song.file.media_mid,
          songmid: song.mid,
          id: song.id,
          albumname: song.album.name,
          albummid: song.album.mid,
          songname: song.name,
          interval: song.interval,
        }));
        commit(UPDATE_SONGS_DATA, { id: payload, songs });
        return songs;
      });
  },
};

const mutations = {
  [BATCH_ADD](state, payload) {
    state.cds = payload;
  },
  [UPDATE_SONGS_DATA](state, { id, songs }) {
    const cd = state.cds.find(cd => cd.id === id);
    cd.songs = songs;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
