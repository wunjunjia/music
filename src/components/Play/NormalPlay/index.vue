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
      <div class="middle" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <div class="panel avatar-wrapper" ref="avatar-wrapper">
          <div class="normal-avatar" ref="normal-avatar">
            <img :src="song.image" class="rotation" :class="playState ? '' : 'pause'" alt="image">
          </div>
          <div class="text">
            <p>{{ txt }}</p>
          </div>
        </div>
        <div class="panel lyric-wrapper" ref="lyric-wrapper">
          <ScrollView :dataSource="lyric.lines" ref="scrollView">
            <ul class="list">
              <li v-for="(line, index) in lyric.lines" :key="index" :class="lineNum === index ? 'active' : ''" ref="line">
                <p>{{ line.txt }}</p>
              </li>
            </ul>
          </ScrollView>
        </div>
      </div>
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
import Progress from './Progress/index.vue';
import ControlPanel from './ControlPanel/index.vue';
import ScrollView from '@/components/ScrollView/index.vue';

export default {
  name: 'NormalPlay',
  data() {
    return {
      lyric: {
        lines: [],
      },
      lineNum: 0,
      startX: 0,
      startY: 0,
      index: 0,
      txt: '',
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
    },
    playState() {
      if (this.lyric) this.lyric.togglePlay();
    },
  },
  components: {
    Progress,
    ControlPanel,
    ScrollView,
  },
  methods: {
    beforeEnter() {
      const miniAvatarStyles = this.getMiniAvatarStyles();
      const top = document.querySelector('.top');
      const { marginBottom, height } = window.getComputedStyle(top);
      const normalAvatar = document.querySelector('.normal-avatar');
      const normalAvatarStyles = window.getComputedStyle(normalAvatar);
      const borderWidth = parseInt(normalAvatarStyles.borderWidth, 10);

      normalAvatar.style.width = miniAvatarStyles.width;
      normalAvatar.style.height = miniAvatarStyles.height;
      normalAvatar.style.left = `${parseInt(miniAvatarStyles.marginLeft, 10) + parseInt(miniAvatarStyles.width, 10) / 2}px`;
      normalAvatar.style.top = `${document.documentElement.clientHeight - parseInt(marginBottom, 10) - parseInt(height, 10) - parseInt(miniAvatarStyles.height, 10) - parseInt(miniAvatarStyles.paddingBottom, 10) - borderWidth}px`;
    },
    enter(el) {
      // 必须写这条语句，否则js的过渡效果不生效
      /* eslint-disable-next-line */
      const offsetHeight = el.offsetHeight;
      const normalAvatar = document.querySelector('.normal-avatar');
      normalAvatar.style.width = '280px';
      normalAvatar.style.height = '280px';
      normalAvatar.style.top = 0;
      normalAvatar.style.left = '50%';
      normalAvatar.style.transform = 'translateX(-50%)';
      normalAvatar.style.transition = 'all .4s ease';
      // 调用done方法会使css的过渡失效
    },
    lyricHandle({ lineNum, txt }) {
      this.lineNum = lineNum;
      const index = lineNum > 5 ? lineNum - 5 : 0;
      this.$refs.scrollView.scrollToElement(this.$refs.line[index], 1000);
      this.txt = txt;
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
    touchStart(el) {
      this.startX = el.targetTouches[0].clientX;
      this.startY = el.targetTouches[0].clientY;
      this.$refs['avatar-wrapper'].style.transitionDuration = '0s';
      this.$refs['lyric-wrapper'].style.transitionDuration = '0s';
    },
    touchMove(el) {
      const distanceX = el.targetTouches[0].clientX - this.startX;
      const distanceY = el.targetTouches[0].clientY - this.startY;
      if (Math.abs(distanceY) > Math.abs(distanceX)) return;
      if (distanceX < 0 && this.index === 0) {
        const value = Math.abs(distanceX);
        const opacity = 1 - value / document.documentElement.clientWidth;
        this.$refs['avatar-wrapper'].style.opacity = opacity;
        const left = document.documentElement.clientWidth - value;
        this.$refs['lyric-wrapper'].style.left = `${left}px`;
        return;
      }
      if (distanceX > 0 && this.index === 1) {
        const opacity = distanceX / document.documentElement.clientWidth;
        this.$refs['avatar-wrapper'].style.opacity = opacity;
        this.$refs['lyric-wrapper'].style.left = `${distanceX}px`;
      }
    },
    touchEnd(el) {
      this.$refs['avatar-wrapper'].style.transitionDuration = '0.4s';
      this.$refs['lyric-wrapper'].style.transitionDuration = '0.4s';
      const distanceX = el.changedTouches[0].clientX - this.startX;
      if (distanceX < 0 && this.index === 1) return;
      if (distanceX > 0 && this.index === 0) return;
      if (distanceX === 0) return;
      const value = Math.abs(distanceX);
      if (value > 50) this.index = this.index === 0 ? 1 : 0;
      this.touchHandle();
    },
    touchHandle() {
      if (this.index === 0) {
        this.$refs['lyric-wrapper'].style.left = '100%';
        this.$refs['avatar-wrapper'].style.opacity = 1;
      } else {
        this.$refs['lyric-wrapper'].style.left = 0;
        this.$refs['avatar-wrapper'].style.opacity = 0;
      }
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

  >.middle {
    position: absolute;
    top: 85px;
    bottom: 165px;
    left: 0;
    right: 0;

    >.panel {
      width: 100%;
      height: 100%;

      .list {
        width: 300px;
        margin: 0 auto;

        >li {
          font-size: $font-size-medium;
          color: hsla(0, 0%, 100%, .5);
          line-height: 32px;
          text-align: center;

          &.active {
            color: $color-text;
          }
        }
      }

      >.normal-avatar {
        position: absolute;
        border: 10px solid hsla(0, 0%, 100%, .1);
        border-radius: 50%;

        >img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      >.text {
        width: 300px;
        line-height: 20px;
        padding-top: 30px;
        margin: 0 auto;
        color: hsla(0, 0%, 100%, .5);
        font-size: $font-size-medium;
        text-align: center;
      }

      &.avatar-wrapper {
        box-sizing: border-box;
        padding-top: 300px;
        transition: opacity .4s ease;
      }

      &.lyric-wrapper {
        position: absolute;
        left: 100%;
        top: 0;
        transition: left .4s ease;
      }
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
