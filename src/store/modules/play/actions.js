import axios from 'axios';
import { Base64 } from 'js-base64';
import {
  UPDATE_LOADING,
  TOGGLE,
  UPDATE_SONG_CANPLAY,
  UPDATE_SONG_AUDIOSRC,
  UPDATE_SONG_LYRIC,
  BATCH_ADD,
} from './mutation-types';
import { SEQUENCE, RANDOM, LOOP } from '@/config';

function get(url, songmid, check) {
  return new Promise((resolve, reject) => {
    function monitor(count) {
      if (count < 3) {
        try {
          axios.get(url, { params: { songmid } })
            .then((res) => {
              const flag = check(res.data);
              if (flag) monitor(count + 1);
              else resolve(res.data);
            });
        } catch (e) {
          reject(e);
        }
      } else {
        resolve(null);
      }
    }
    monitor(1);
  });
}

function getData(commit, payload, handle) {
  const songmid = payload.song.songmid;
  return Promise.all([
    get('/api/vkey', songmid, data => data.req_0.data.midurlinfo[0].vkey === ''),
    get('/api/lyric', songmid, data => data.lyric === ''),
  ]).then(([vkey, lyric]) => {
    if (vkey) {
      handle(payload);
      commit(UPDATE_SONG_LYRIC, Base64.decode(lyric.lyric));
      commit(UPDATE_SONG_AUDIOSRC, vkey.req_0.data.midurlinfo[0].vkey);
      return true;
    }
    commit(UPDATE_SONG_CANPLAY, payload.song);
    return false;
  }, e => Promise.reject(e));
}

const operator = {
  prev(index, length) {
    return index === 0 ? length - 1 : index - 1;
  },
  next(index, length) {
    return index === length - 1 ? 0 : index + 1;
  },
};

export default {
  random({ commit }, payload) {
    commit(UPDATE_LOADING, true);
    const index = parseInt(Math.random() * payload.length, 10);

    function handle({ song }) {
      commit(UPDATE_LOADING, false);
      const songs = payload.filter(song => song.canplay);
      const index = songs.findIndex(s => s.songmid === song.songmid);
      commit(BATCH_ADD, { songs, index });
    }

    return new Promise((resolve, reject) => {
      function core(current) {
        if (current === index) {
          commit(UPDATE_LOADING, false);
          resolve(false);
          return;
        }
        const next = operator.next(current, payload.length);
        const song = payload[next];
        if (song.audioSrc === '') {
          getData(commit, { song }, handle)
            .then((res) => {
              if (res) {
                resolve(true);
                return;
              }
              core(next);
            })
            .catch((e) => {
              commit(UPDATE_LOADING, false);
              reject(e);
            });
        } else {
          handle({ song });
          resolve(true);
        }
      }

      core(operator.next(index, payload.length));
    });
  },
  toggle({ state, commit }, o) {
    const index = state.index;

    function handle({ current }) {
      commit(UPDATE_LOADING, false);
      commit(TOGGLE, current);
    }

    return new Promise((resolve, reject) => {
      function core(current) {
        if (current === index) {
          handle({ current });
          resolve();
          return;
        }
        const song = state.songs[current];
        const next = operator[o](current, state.songs.length);
        if (song.canplay) {
          if (song.audioSrc === '') {
            getData(commit, { song, current }, handle)
              .then((res) => {
                if (res) {
                  resolve();
                  return;
                }
                core(next);
              })
              .catch((e) => {
                commit(UPDATE_LOADING, false);
                reject(e);
              });
          } else {
            handle({ current });
            resolve();
          }
        } else {
          core(next);
        }
      }

      if (state.songs.length === 1 || state.mode === LOOP) {
        resolve();
        return;
      }

      commit(UPDATE_LOADING, true);

      if (state.mode === SEQUENCE) {
        core(operator[o](index, state.songs.length));
        return;
      }
      if (state.mode === RANDOM) {
        const arr = [];
        for (let i = 0; i < state.songs.length; ++i) arr.push(i);
        arr.splice(index, 1);
        core(arr.length === 1 ? arr[0] : arr[parseInt(Math.random() * arr.length, 10)]);
      }
    });
  },
  choose({ commit }, { mutation, song }) {
    function handle({ song }) {
      commit(mutation, song);
    }

    return new Promise((resolve, reject) => {
      if (song.audioSrc === '') {
        commit(UPDATE_LOADING, true);
        getData(commit, { song }, handle)
          .then((res) => {
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          })
          .finally(() => {
            commit(UPDATE_LOADING, false);
          });
      } else {
        handle({ song });
        resolve(true);
      }
    });
  },
};
