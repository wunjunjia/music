<template>
  <transition name="normal-play" @before-enter="beforeEnter" @enter="enter" @leave="beforeEnter">
    <div v-show="fullscreen" class="normal-play">
      <div class="background">
        <img :src="song.image" alt="image">
      </div>
      <div class="top">
        <span class="icon" @click="close"><i class="icon-back"></i></span>
        <h1 class="songname">{{ song.songname }}</h1>
        <h2 class="author">{{ song.authors[0] }}</h2>
      </div>
      <Middle :toggleIndex="toggleIndex" :lyric="lyric" ref="middle" />
      <div class="bottom">
        <div class="dot-wrapper">
          <span class="dot" :class="index === 0 ? 'active' : ''"></span>
          <span class="dot" :class="index === 1 ? 'active' : ''"></span>
        </div>
        <Progress :updateCurrentTime="updateCurrentTime" :currentTime="currentTime" :seek="seek" />
        <ControlPanel :togglePlayState="togglePlayState" :updateCurrentTime="updateCurrentTime" :seek="seek" />
      </div>
    </div>
  </transition>
</template>
<script type="text/javascript">
import { mapState, mapGetters } from 'vuex';
import Lyric from 'lyric-parser';
import Middle from './Middle/index.vue';
import Progress from './Progress/index.vue';
import ControlPanel from './ControlPanel/index.vue';

export default {
  name: 'NormalPlay',
  data() {
    return {
      lyric: {
        lines: [],
      },
      index: 0,
    };
  },
  props: {
    close: {
      type: Function,
      required: true,
    },
    togglePlayState: {
      type: Function,
      required: true,
    },
    getMiniAvatarStyles: {
      type: Function,
      required: true,
    },
    currentTime: {
      type: Number,
      required: true,
    },
    updateCurrentTime: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapState('play', {
      fullscreen: state => state.fullscreen,
      playState: state => state.playState,
    }),
    ...mapGetters('play', ['song']),
  },
  watch: {
    song(s) {
      if (this.lyric.lines.length !== 0) this.lyric.stop();
      this.lyric = new Lyric(s.lyric, this.lyricHandle);
      this.$refs.middle.refresh();
    },
    playState() {
      if (this.lyric) this.lyric.togglePlay();
    },
  },
  components: {
    Progress,
    ControlPanel,
    Middle,
  },
  methods: {
    beforeEnter() {
      const miniAvatarStyles = this.getMiniAvatarStyles();
      const top = document.querySelector('.top');
      this.$refs.middle.beforeEnter(miniAvatarStyles, window.getComputedStyle(top));
    },
    enter(el) {
      // 必须写这条语句，否则js的过渡效果不生效
      /* eslint-disable-next-line */
      const offsetHeight = el.offsetHeight;
      this.$refs.middle.enter();
      // 调用done方法会使css的过渡失效
    },
    lyricHandle({ lineNum, txt }) {
      this.$refs.middle.lyricHandle(lineNum, txt);
    },
    seek(startTime) {
      this.lyric.seek(startTime);
    },
    play() {
      this.lyric.play();
    },
    togglePlay() {
      if (this.lyric.state === 0) this.lyric.togglePlay();
    },
    toggleIndex(index) {
      this.index = index;
    },
  },
};

</script>
<style scoped lang="scss">
.normal-play {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background;

  >.background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: .6;
    filter: blur(20px);

    >img {
      width: 100%;
      height: 100%;
    }
  }

  >.top {
    position: relative;
    height: 60px;
    margin-bottom: 25px;
    text-align: center;

    >.songname {
      width: 250px;
      height: 40px;
      line-height: 40px;
      font-size: $font-size-large;
      margin: auto;
      @include no-wrap();
    }

    >.author {
      line-height: 20px;
      font-size: $font-size-medium;
    }

    >.icon {
      position: absolute;
      top: 0;
      left: 6px;
      width: 22px;
      height: 22px;
      padding: 9px;
      font-size: $font-size-large-x;
      color: $color-theme;
      transform: rotate(-90deg);
    }
  }

  >.bottom {
    position: absolute;
    width: 100%;
    height: 98px;
    left: 0;
    bottom: 50px;

    >.dot-wrapper {
      width: 100%;
      height: 8px;
      text-align: center;
      font-size: 0;

      >.dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 4px;
        background-color: hsla(0, 0, 100%, .5);

        &.active {
          width: 20px;
          border-radius: 5px;
          background-color: hsla(0, 0%, 100%, .8);
        }
      }
    }
  }
}

.normal-play-enter,
.normal-play-leave-to {
  opacity: 0;

  >.top {
    transform: translateY(-100%);
  }

  >.bottom {
    transform: translateY(200%);
  }
}

.normal-play-enter-active,
.normal-play-leave-active {
  transition: opacity .4s ease;

  >.top {
    transition: transform .4s cubic-bezier(.11, .34, .77, 1.58);
  }

  >.bottom {
    transition: transform .4s ease-in;
  }
}

</style>
