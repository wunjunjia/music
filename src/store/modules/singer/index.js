import { singerDetailParam, SUCCESS } from '@/config';
import { jsonp } from '@/utils';
import {
  BATCH_ADD,
  UPDATE_SONGS_DATA,
  UPDATE_RESERVE,
  UPDATE_INDEX,
  UPDATE_MORE,
} from './mutation-types';
import Song from '@/model/song';

const state = {
  singers: [],
  count: 20,
  index: {},
  reserve: {},
  mores: {},
};

const getters = {
  find: state => serial => state.singers.find(singer => singer.serial === serial),
};

const actions = {
  getSingerDetail({ commit }, serial) {
    return jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
        Object.assign({ singermid: serial }, singerDetailParam))
      .then((data) => {
        if (data.code === SUCCESS) {
          const singer = data.data;
          const songs = singer.list.map(song => new Song({
            authors: song.musicData.singer.map(singer => singer.name),
            songmid: song.musicData.songmid,
            albumname: song.musicData.albumname,
            albummid: song.musicData.albummid,
            songname: song.musicData.songname,
            interval: song.musicData.interval,
          }));
          commit(UPDATE_RESERVE, { songs, serial });
          commit(UPDATE_INDEX, serial);
          commit(UPDATE_MORE, serial);
          commit(UPDATE_SONGS_DATA, serial);
        }
      });
  },
};

const mutations = {
  [BATCH_ADD](state, payload) {
    state.singers = payload;
  },
  [UPDATE_RESERVE](state, { songs, serial }) {
    state.reserve = { ...state.reserve, [serial]: songs };
  },
  [UPDATE_INDEX](state, payload) {
    state.index = { ...state.index, [payload]: 0 };
  },
  [UPDATE_MORE](state, payload) {
    state.mores = { ...state.mores, [payload]: true };
  },
  [UPDATE_SONGS_DATA](state, payload) {
    const singer = state.singers.find(singer => singer.serial === payload);
    const reserve = state.reserve[payload];
    const index = state.index[payload];
    singer.songs = [...singer.songs, ...reserve.slice(index * state.count, (index + 1) * state.count)];
    state.index = { ...state.index, [payload]: index + 1 };
    if (singer.songs.length === reserve.length) state.mores = { ...state.mores, [payload]: false };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
