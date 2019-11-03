<template>
  <div class="progress-panel">
    <span>{{ currentTime | format }}</span>
    <div class="progress-wrapper" @touchstart="touchStart" ref="progress-wrapper" @touchmove="touchMove" @touchend="touchEnd">
      <div class="behind" ref="behind"></div>
      <div class="front" ref="front"></div>
      <div class="btn-wrapper" ref="btn-wrapper">
        <div class="btn"></div>
      </div>
    </div>
    <span>{{ song.interval | format }}</span>
  </div>
</template>
<script type="text/javascript">
import { mapGetters, mapMutations, mapState } from 'vuex';
import { UPDATE_PLAYSTATE } from '@/store/modules/play/mutation-types';

function padLeft(value) {
  return `${value >= 10 ? value : `0${value}`}`;
}

export default {
  name: 'Progress',
  data() {
    return {
      move: false,
    };
  },
  props: {
    currentTime: {
      type: Number,
      required: true,
    },
    updateCurrentTime: {
      type: Function,
      required: true,
    },
    seek: {
      type: Function,
      required: true,
    },
  },
  computed: {
    maxWidth() {
      return this.$refs.behind.offsetWidth - 16;
    },
    ...mapState('play', {
      playState: state => state.playState,
    }),
    ...mapGetters('play', ['song']),
  },
  methods: {
    updateProgress(width) {
      this.$refs['btn-wrapper'].style.transform = `translateX(${width}px)`;
      this.$refs.front.style.width = `${width}px`;
    },
    handle(clientX) {
      let width = parseInt(clientX - this.$refs['progress-wrapper'].offsetLeft, 10);
      if (width < 0) width = 0;
      else if (width > this.maxWidth) width = this.maxWidth;
      const time = parseInt(width / this.maxWidth * this.song.interval, 10);
      this.updateCurrentTime(time);
      this.seek(time * 1000);
      this.updateProgress(width);
    },
    touchStart(el) {
      this.handle(el.changedTouches[0].clientX);
      if (!this.playState) this[UPDATE_PLAYSTATE](true);
    },
    touchMove(el) {
      this.move = true;
      let width = parseInt(el.targetTouches[0].clientX - this.$refs['progress-wrapper'].offsetLeft, 10);
      if (width < 0) width = 0;
      else if (width > this.maxWidth) width = this.maxWidth;
      this.updateProgress(width);
    },
    touchEnd(el) {
      if (this.move) {
        this.handle(el.changedTouches[0].clientX);
        this.move = false;
      }
    },
    ...mapMutations('play', [UPDATE_PLAYSTATE]),
  },
  watch: {
    currentTime(value) {
      if (!this.move) {
        const width = parseInt(value / this.song.interval * this.maxWidth, 10);
        this.updateProgress(width);
      }
    },
  },
  filters: {
    format(value) {
      const minute = Math.floor(value / 60);
      const second = value % 60;
      return `${padLeft(minute)}:${padLeft(second)}`;
    },
  },
};

</script>
<style scoped lang="scss">
.progress-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 10px 0;
  margin: 0 auto;
  font-size: $font-size-small;

  >span {
    width: 32px;
    height: 30px;
    line-height: 30px;
  }

  >.progress-wrapper {
    display: flex;
    align-items: center;
    width: 226px;
    height: 30px;
    position: relative;

    >.behind {
      width: 100%;
      height: 4px;
      background-color: $color-background-d;
    }

    >.front {
      width: 0;
      height: 4px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: $color-theme;
    }

    >.btn-wrapper {
      position: absolute;
      left: -7px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;

      >.btn {
        width: 10px;
        height: 10px;
        border: 3px solid #fff;
        border-radius: 50%;
        background-color: $color-theme;
      }
    }
  }
}

</style>
