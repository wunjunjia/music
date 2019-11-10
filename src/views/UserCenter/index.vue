<template>
  <div class="root">
    <div class="header">
      <span class="icon" @click="back"><i class="icon-back"></i></span>
      <ul class="nav">
        <li class="item" v-for="(item, i) in navItems" :key="item" :class="i === index ? 'active' : ''" @click="toggleIndex(i)">{{ item }}</li>
      </ul>
    </div>
    <div class="play" :class="loading ? 'disable' : ''" ref="play" @click="randomPlay">
      <span class="icon"><i class="icon-play"></i></span>
      <span>随机播放全部</span>
    </div>
    <ul class="container" ref="container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <li class="panel">
        <SongList ref="loves" :callback="activeTip" :list="loves" />
      </li>
      <li class="panel">
        <SongList ref="recentPlay" :callback="activeTip" :list="recentPlay" />
      </li>
    </ul>
    <Tip :active="active" />
  </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import SongList from '@/components/SongList/index.vue';
import Tip from '@/components/Tip/index.vue';
import mixin from '@/mixin';

const { tab } = mixin;
export default {
  name: 'UserCenter',
  data() {
    return {
      total: 2,
      navItems: ['我喜欢的', '最近听的'],
    };
  },
  mixins: [tab],
  computed: {
    ...mapState('play', {
      loading: state => state.loading,
      recentPlay: state => state.recentPlay,
      loves: state => state.loves,
    }),
  },
  components: {
    SongList,
    Tip,
  },
  methods: {
    back() {
      this.$router.history.go(-1);
    },
    randomPlay() {
      if (this.loves.length === 0 && this.recentPlay.length === 0) return;
      this.random(this.index === 0 ? this.loves.map(song => song) : this.recentPlay.map(song => song));
    },
    ...mapActions('play', ['random']),
  },
  activated() {
    this.$refs.loves.refresh();
    this.$refs.recentPlay.refresh();
  },
};

</script>
<style scoped lang="scss">
.root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-background;
  z-index: 999;

  >.header {
    position: relative;
    width: 100%;
    height: 32px;
    padding-top: 10px;
    margin-bottom: 30px;

    >.icon {
      position: absolute;
      top: 5px;
      left: 6px;
      width: 42px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      color: $color-theme;
      font-size: $font-size-large-x;
    }

    >.nav {
      display: flex;
      width: 240px;
      height: 30px;
      margin: 0 auto;
      border-radius: 5px;
      border: 1px solid $color-highlight-background;

      >.item {
        box-sizing: border-box;
        width: 120px;
        height: 30px;
        border-radius: 5px;
        padding: 8px;
        font-size: $font-size-medium;
        text-align: center;
        color: hsla(0, 0%, 100%, .3);

        &.active {
          color: #fff;
          background-color: $color-highlight-background;
        }
      }
    }
  }

  >.play {
    width: 133px;
    height: 16px;
    margin: 0 auto;
    padding: 7px 0;
    border: 1px solid hsla(0, 0%, 100%, .5);
    border-radius: 100px;
    color: hsla(0, 0%, 100%, .5);
    text-align: center;
    font-size: $font-size-small;
    line-height: 16px;

    &.disable {
      color: hsla(0, 0%, 100%, .3);
      border-color: hsla(0, 0%, 100%, .3);
    }

    >.icon {
      font-size: $font-size-medium-x;
      vertical-align: middle;
      margin-right: 6px;
    }
  }

  >.container {
    display: flex;
    position: absolute;
    top: 114px;
    left: 0;
    bottom: 0;
    width: 200%;
    transition: transform .4s ease;

    >.panel {
      box-sizing: border-box;
      flex: 1;
      height: 100%;
      padding: 20px 30px 0 30px;
      overflow: hidden;
    }
  }
}

</style>
