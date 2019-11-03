import {singerDetailParam, SUCCESS} from '@/config';
import {jsonp} from '@/utils';
import { ADD, BATCH_ADD, UPDATE_SONGS_DATA } from './mutation-types';
import Song from '@/model/song';

const state = {
  singers: [],
};

const getters = {
  singers: state => state.singers,
  find: state => serial => state.singers.find(singer => singer.serial === serial),
};

const actions = {
  getSingerDetail(context, serial) {
    return jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
      Object.assign({singermid: serial}, singerDetailParam))
      .then((data) => {
        if (data.code === SUCCESS) {
          const singer = data.data;
          const songs = singer.list.map(song => new Song({
            authors: song.musicData.singer.map(singer => singer.name),
            strMediaMid: song.musicData.strMediaMid,
            songmid: song.musicData.songmid,
            albumname: song.musicData.albumname,
            albummid: song.musicData.albummid,
            songname: song.musicData.songname,
            interval: song.musicData.interval,
          }));
          context.commit(UPDATE_SONGS_DATA, {
            serial,
            songs,
          });
        }
      });
  },
};

const mutations = {
  [ADD](state, payload) {
    state.singers.push(payload);
  },
  [BATCH_ADD](state, payload) {
    payload.forEach(singer => state.singers.push(singer));
  },
  [UPDATE_SONGS_DATA](state, {serial, songs}) {
    const singer = state.singers.find(singer => singer.serial === serial);
    singer.songs = songs;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
