<template>
  <div class="control-panel">
    <span class="icon left">
      <i :class="icon" @click="toggleMode"></i>
    </span>
    <span class="icon left" :class="loading ? 'disable' : ''">
      <i class="icon-prev" @click="toggleSong(toggle.bind(this, 'prev'))"></i>
    </span>
    <span class="icon center">
      <i :class="playState ? 'icon-pause' : 'icon-play'" @click="togglePlayState"></i>
    </span>
    <span class="icon right" :class="loading ? 'disable' : ''">
      <i class="icon-next" @click="toggleSong(toggle.bind(this, 'next'))"></i>
    </span>
    <span class="icon right" :class="{love: song.love}"><i :class="song.love ? 'icon-favorite' : 'icon-not-favorite'" @click="toggleLove"></i></span>
  </div>
</template>
<script type="text/javascript">
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
import { LOOP, RANDOM } from '@/config';
import { UPDATE_MODE, UPDATE_PLAYSTATE, UPDATE_SONG_LOVE } from '@/store/modules/play/mutation-types';

export default {
  name: 'ControlPanel',
  props: {
    updateCurrentTime: {
      type: Function,
      required: true,
    },
    seek: {
      type: Function,
      required: true,
    },
  },
  methods: {
    toggleSong(fn) {
      if (this.loading) return;
      const index = this.index;
      fn()
        .then(() => {
          if (this.index === index) {
            this.updateCurrentTime(0);
            this.seek(0);
            if (!this.playState) this[UPDATE_PLAYSTATE](true);
          }
        });
    },
    togglePlayState() {
      this[UPDATE_PLAYSTATE](!this.playState);
    },
    toggleMode() {
      this[UPDATE_MODE]((this.mode + 1) % 3);
    },
    toggleLove() {
      this[UPDATE_SONG_LOVE](this.song);
    },
    ...mapActions('play', ['toggle']),
    ...mapMutations('play', [UPDATE_MODE, UPDATE_PLAYSTATE, UPDATE_SONG_LOVE]),
  },
  computed: {
    ...mapState('play', {
      playState: state => state.playState,
      loading: state => state.loading,
      index: state => state.index,
      mode: state => state.mode,
    }),
    ...mapGetters('play', ['song']),
    icon() {
      if (this.mode === LOOP) return 'icon-loop';
      if (this.mode === RANDOM) return 'icon-random';
      return 'icon-sequence';
    },
  },
};

</script>
<style lang="scss" scoped>
.control-panel {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  >.icon {
    flex: .18;
    color: $color-theme;
    font-size: 30px;

    &.left {
      text-align: right;
    }

    &.center {
      flex: .28;
      font-size: 40px;
      text-align: center;
    }

    &.right {
      text-align: left;
    }

    &.disable {
      color: hsla(0, 0%, 100%, .3);
    }

    &.love {
      color: $color-sub-theme;
    }
  }
}

</style>
