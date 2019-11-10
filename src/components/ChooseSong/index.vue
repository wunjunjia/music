<template>
  <transition name="detail" @enter="enter">
    <div class="root" v-show="show">
      <div class="header">
        <span>添加歌曲到列表</span>
        <span class="icon" @click="close"><i class="icon-close"></i></span>
      </div>
      <div class="main">
        <SearchInput ref="search-input" :callback="activeTip" />
        <div class="content">
          <ul class="nav">
            <li class="item" v-for="(item, i) in navItems" :key="item" :class="i === index ? 'active' : ''" @click="toggleIndex(i)">{{ item }}</li>
          </ul>
          <ul class="container" ref="container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <li class="panel">
              <SongList ref="recentPlay" :callback="activeTip" :list="recentPlay" />
            </li>
            <li class="panel">
              <SearchHistory :setSearch="setSearch" ref="searchHistory" />
            </li>
          </ul>
        </div>
      </div>
      <Tip :active="active" />
    </div>
  </transition>
</template>
<script type="text/javascript">
import { mapState } from 'vuex';
import SearchInput from '@/components/SearchInput/index.vue';
import SearchHistory from '@/components/SearchHistory/index.vue';
import SongList from '@/components/SongList/index.vue';
import Tip from '@/components/Tip/index.vue';
import mixin from '@/mixin';

const { tab } = mixin;
export default {
  name: 'ChooseSong',
  data() {
    return {
      show: false,
      total: 2,
      navItems: ['最近播放', '搜索历史'],
    };
  },
  mixins: [tab],
  computed: {
    ...mapState('play', {
      recentPlay: state => state.recentPlay,
    }),
  },
  components: {
    SearchInput,
    SearchHistory,
    SongList,
    Tip,
  },
  methods: {
    setSearch(value) {
      this.$refs['search-input'].setSearch(value);
    },
    toggleShow() {
      this.show = !this.show;
    },
    close() {
      this.setSearch('');
      this.toggleShow();
    },
    enter() {
      this.$refs.recentPlay.refresh();
      this.$refs.searchHistory.refresh();
    },
  },
};

</script>
<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background;

  >.header {
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-large;
    text-align: center;

    >.icon {
      position: absolute;
      right: 8px;
      top: 0;
      width: 20px;
      height: 20px;
      line-height: 20px;
      padding: 12px;
      font-size: 20px;
      color: $color-theme;
    }
  }

  >.main {
    flex: 1;
    position: relative;

    >.content {
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 42px;
      overflow: hidden;

      >.nav {
        display: flex;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 30px;
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
  }
}

.container {
  display: flex;
  width: 200%;
  height: 100%;
  transition: transform .4s ease;

  >.panel {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    padding: 20px 30px 0 30px;
    overflow: hidden;
  }
}

</style>
