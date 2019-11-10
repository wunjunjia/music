import Vue from 'vue';
import Vuex from 'vuex';
import singer from './modules/singer';
import play from './modules/play';
import global from './modules/global';
import playList from './modules/playList';
import cd from './modules/cd';
import rank from './modules/rank';
import confirm from './modules/confirm';

Vue.use(Vuex);

// const dev = process.env.NODE_ENV === 'development';

const store = new Vuex.Store({
  modules: {
    singer,
    play,
    global,
    playList,
    cd,
    rank,
    confirm,
  },
  strict: true,
});

export default store;
