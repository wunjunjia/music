import Vue from 'vue';
import Vuex from 'vuex';
import singer from './modules/singer';
import play from './modules/play';
import global from './modules/global';
import playList from './modules/playList';

Vue.use(Vuex);

// const dev = process.env.NODE_ENV === 'development';

const store = new Vuex.Store({
  modules: {
    singer,
    play,
    global,
    playList,
  },
  strict: true,
});

export default store;
