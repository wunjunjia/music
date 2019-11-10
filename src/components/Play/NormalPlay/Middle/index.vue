<template>
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
          <li ref="line" v-if="lyric.lines.length === 0" class="single">
            <p>此歌曲为没有填词的纯音乐，请您欣赏</p>
          </li>
        </ul>
      </ScrollView>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters } from 'vuex';
import ScrollView from '@/components/ScrollView/index.vue';

export default {
  name: 'PlayMiddle',
  data() {
    return {
      startX: 0,
      startY: 0,
      txt: '',
      lineNum: 0,
      index: 0,
    };
  },
  props: {
    lyric: {
      type: Object,
      required: true,
    },
    toggleIndex: {
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
    lyric() {
      this.txt = '';
    },
  },
  components: {
    ScrollView,
  },
  methods: {
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
      if ((distanceX < 0 && this.index === 1) || (distanceX > 0 && this.index === 0)) return;
      if (Math.abs(distanceX) > 50) {
        this.index = this.index === 0 ? 1 : 0;
        this.toggleIndex(this.index);
      }
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
    lyricHandle(lineNum, txt) {
      this.lineNum = lineNum;
      const index = lineNum > 5 ? lineNum - 5 : 0;
      this.$refs.scrollView.scrollToElement(this.$refs.line[index], 1000);
      this.txt = txt;
    },
    beforeEnter(miniAvatarStyles, { marginBottom, height }) {
      const normalAvatar = document.querySelector('.normal-avatar');
      const normalAvatarStyles = window.getComputedStyle(normalAvatar);
      const borderWidth = parseInt(normalAvatarStyles.borderWidth, 10);
      normalAvatar.style.width = miniAvatarStyles.width;
      normalAvatar.style.height = miniAvatarStyles.height;
      normalAvatar.style.left = `${parseInt(miniAvatarStyles.marginLeft, 10) + parseInt(miniAvatarStyles.width, 10) / 2}px`;
      normalAvatar.style.top = `${document.documentElement.clientHeight - parseInt(marginBottom, 10) - parseInt(height, 10) - parseInt(miniAvatarStyles.height, 10) - parseInt(miniAvatarStyles.paddingBottom, 10) - borderWidth}px`;
    },
    enter() {
      const normalAvatar = document.querySelector('.normal-avatar');
      normalAvatar.style.width = '280px';
      normalAvatar.style.height = '280px';
      normalAvatar.style.top = 0;
      normalAvatar.style.left = '50%';
      normalAvatar.style.transform = 'translateX(-50%)';
      normalAvatar.style.transition = 'all .4s ease';
    },
    afterEnter() {
      this.$refs.scrollView.refresh();
      this.$nextTick(() => {
        const el = this.lyric.lines.length === 0 ? this.$refs.line : this.$refs.line[this.lineNum > 5 ? this.lineNum - 5 : 0];
        this.$refs.scrollView.scrollToElement(el);
      });
    },
  },
};

</script>
<style scoped lang="scss">
.middle {
  position: absolute;
  top: 85px;
  bottom: 165px;
  left: 0;
  right: 0;

  >.panel {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .list {
      position: relative;
      width: 300px;
      min-height: 100%;
      margin: 0 auto;

      >li {
        font-size: $font-size-medium;
        color: hsla(0, 0%, 100%, .5);
        line-height: 32px;
        text-align: center;

        &.active {
          color: $color-text;
        }

        &.single {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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

</style>
