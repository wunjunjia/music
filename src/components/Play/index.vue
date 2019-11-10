<template>
  <div>
    <NormalPlay :getMiniAvatarStyles="getMiniAvatarStyles" :currentTime="currentTime" :updateCurrentTime="updateCurrentTime" ref="normalPlay" />
    <MiniPlay ref="miniPlay" :currentTime="currentTime" />
    <audio v-if="song.audioSrc" ref="audio" :src="song.audioSrc" @loadeddata="loadeddata" @canplay="canplay" @ended="ended" @error="error" @timeupdate="timeUpdate"></audio>
  </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions,
} from 'vuex';
import NormalPlay from './NormalPlay/index.vue';
import MiniPlay from './MiniPlay/index.vue';

export default {
  name: 'Play',
  data() {
    return {
      currentTime: 0,
    };
  },
  computed: {
    ...mapState('play', {
      playState: state => state.playState,
      index: state => state.index,
    }),
    ...mapGetters('play', ['song']),
  },
  watch: {
    playState(current) {
      if (this.$refs.audio) {
        current ? this.$refs.audio.play() : this.$refs.audio.pause();
      }
    },
  },
  methods: {
    loadeddata() {
      this.$refs.audio.play();
      this.$refs.normalPlay.play();
    },
    canplay() {
      // this.$refs.normalPlay.togglePlay();
    },
    ended() {
      // 在切换下一首歌之前先把index记录一下，与切歌后的index做比较，如果相同，那么需要手动重置时间
      const index = this.index;
      this.toggle('next')
        .then(() => {
          if (index === this.index) {
            this.updateCurrentTime(0);
            this.$refs.normalPlay.seek(0);
            this.$refs.audio.play();
          }
        });
    },
    error() {},
    updateCurrentTime(value) {
      this.$refs.audio.currentTime = value;
    },
    timeUpdate() {
      if (this.$refs.audio) this.currentTime = parseInt(this.$refs.audio.currentTime, 10);
    },
    getMiniAvatarStyles() {
      return this.$refs.miniPlay.getAvatarStyles();
    },
    ...mapActions('play', ['toggle']),
  },
  components: {
    MiniPlay,
    NormalPlay,
  },
};

</script>
