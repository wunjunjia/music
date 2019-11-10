<template>
  <div id="app" class="app">
    <Header />
    <ul class="nav">
      <li class="item">
        <router-link to="/recommend">推荐</router-link>
      </li>
      <li class="item">
        <router-link to="/singer">歌手</router-link>
      </li>
      <li class="item">
        <router-link to="/rank">排行</router-link>
      </li>
      <li class="item">
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
    <div class="container" :style="{bottom}">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <Play />
      <PlayList />
    </div>
    <Confirm />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Header from '@/components/Header/index.vue';
import Play from '@/components/Play/index.vue';
import PlayList from '@/components/PlayList/index.vue';
import Confirm from '@/components/Confirm/index.vue';

export default {
  name: 'App',
  computed: {
    ...mapState('global', {
      bottom: state => state.bottom,
    }),
  },
  components: {
    Header,
    Play,
    PlayList,
    Confirm,
  },
};

</script>
<style lang="scss">
.app {
  position: relative;

  >.nav {
    display: flex;
    height: 44px;

    >.item {
      flex: 1;
      height: 100%;
      line-height: 44px;
      text-align: center;

      >a {
        font-size: $font-size-medium;
        padding-bottom: 5px;

        &.router-link-active {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }

  >.container {
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
  }
}

</style>
