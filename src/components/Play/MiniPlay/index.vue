<template>
  <div v-show="!fullscreen && songs.length > 0" class="mini-play" @click="open">
    <img class="mini-avatar rotation" :class="playState ? '' : 'pause'" :src="song.image" alt="image">
    <div class="desc">
      <p class="songname">{{ song.songname }}</p>
      <p class="author">{{ song.authors[0] }}</p>
    </div>
    <span class="icon">
      <svg width="32" height="32" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="50" cx="50" cy="50" fill="transparent" class="behind"></circle>
        <circle r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="Math.PI * 100" :stroke-dashoffset="dashoffset" class="front"></circle>
      </svg>
      <i :class="playState ? 'icon-pause-mini' : 'icon-play-mini'" @click.stop.prevent="togglePlayState"></i>
    </span>
    <span class="icon">
      <i class="icon-playlist" @click.stop.prevent="toggleShow"></i>
    </span>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters, mapMutations } from 'vuex';
import { UPDATE_SHOW } from '@/store/modules/playList/mutation-types';

export default {
  name: 'MiniPlay',
  props: {
    open: {
      type: Function,
      required: true,
    },
    togglePlayState: {
      type: Function,
      required: true,
    },
    currentTime: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState('play', {
      fullscreen: state => state.fullscreen,
      songs: state => state.songs,
      playState: state => state.playState,
    }),
    ...mapState('playList', {
      show: state => state.show,
    }),
    ...mapGetters('play', ['song']),
    dashoffset() {
      return (1 - this.currentTime / this.song.interval) * Math.PI * 100;
    },
  },
  methods: {
    getAvatarStyles() {
      return window.getComputedStyle(document.querySelector('.mini-avatar'));
    },
    toggleShow() {
      this[UPDATE_SHOW](!this.show);
    },
    ...mapMutations('playList', [UPDATE_SHOW]),
  },
};

</script>
<style scoped lang="scss">
.mini-play {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: $color-highlight-background;

  >.mini-avatar {
    width: 40px;
    height: 40px;
    margin: 0 10px 0 20px;
    padding: 10px 0;
    border-radius: 50%;
    transform-origin: center center;
  }

  >.desc {
    flex: 1;
    overflow: hidden;

    >p {
      @include no-wrap();

      &.songname {
        font-size: $font-size-medium;
        line-height: 20px;
        margin-bottom: 2px;
      }

      &.author {
        font-size: $font-size-small;
        line-height: 20px;
        color: hsla(0, 0%, 100%, .3);
      }
    }
  }

  >.icon {
    font-size: 32px;
    color: $color-theme-d;
    margin: 0 10px;
    position: relative;

    svg {
      position: absolute;
      z-index: -1;

      circle {
        stroke-width: 8px;
        transform-origin: center;

        &.behind {
          stroke: $color-theme-d;
          transform: scale(.9);
        }

        &.front {
          stroke: $color-theme;
          transform: scale(.9) rotate(-90deg);
        }
      }
    }
  }
}

</style>
