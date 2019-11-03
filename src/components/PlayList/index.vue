<template>
  <transition name="playList">
    <div class="playList" v-show="show" @click.self="close">
      <div class="container">
        <div class="header">
          <div class="mode">
            <span class="icon"><i :class="icon" @click="toggleMode"></i></span>
            <span>{{ text }}</span>
          </div>
          <span class="clear" @click="handleClick"><i class="icon icon-clear"></i></span>
        </div>
        <ScrollView style="max-height: 240px;" ref="scrollView">
          <ul class="list">
            <li class="song" v-for="(song, i) in songs" :key="song.songmid" @click="play(song)" ref="song" :data-songmid="song.songmid">
              <span class="icon" :style="{ visibility: i === index ? 'visible' : 'hidden' }"><i class="icon-play"></i></span>
              <p class="name" :class="{ active: i === index, disable: !song.canplay }">{{song.songname}}</p>
              <span class="icon"><i class="icon-not-favorite"></i></span>
              <span class="icon" @click.stop.prevent="remove(i)"><i class="icon-delete"></i></span>
            </li>
          </ul>
        </ScrollView>
        <div class="add-btn">
          <span class="icon"><i class="icon-add"></i></span>
          <span>添加歌曲到队列</span>
        </div>
        <div class="footer" @click="close">关闭</div>
      </div>
      <Confirm ref="confirm" :confirm="clear" />
    </div>
  </transition>
</template>
<script type="text/javascript">
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';
import { UPDATE_SHOW } from '@/store/modules/playList/mutation-types';
import {
  DELETE,
  CHOOSE,
  CLEAR,
  UPDATE_MODE,
} from '@/store/modules/play/mutation-types';
import { UPDATE_BOTTOM } from '@/store/modules/global/mutation-types';
import { LOOP, RANDOM } from '@/config';
import ScrollView from '@/components/ScrollView/index.vue';
import Confirm from './Confirm/index.vue';

export default {
  name: 'playList',
  computed: {
    ...mapState('playList', {
      show: state => state.show,
    }),
    ...mapState('play', {
      index: state => state.index,
      songs: state => state.songs,
      loading: state => state.loading,
      mode: state => state.mode,
    }),
    ...mapGetters('play', ['song']),
    icon() {
      if (this.mode === LOOP) return 'icon-loop';
      if (this.mode === RANDOM) return 'icon-random';
      return 'icon-sequence';
    },
    text() {
      if (this.mode === LOOP) return '循环播放';
      if (this.mode === RANDOM) return '随机播放';
      return '顺序播放';
    },
  },
  components: {
    ScrollView,
    Confirm,
  },
  watch: {
    show(value) {
      if (!value) return;
      this.$nextTick(() => {
        // 由于songs是动态的，而this.refs.song取到的数组顺序不一定与songs数组顺序一致， 所以依赖索引取值是不可靠的。
        this.$refs.scrollView.refresh();
        const songs = this.$refs.song;
        const song = songs.find(song => song.dataset.songmid === this.song.songmid);
        this.$refs.scrollView.scrollToElement(song);
      });
    },
  },
  methods: {
    close() {
      this[UPDATE_SHOW](false);
    },
    clear() {
      this.$refs.confirm.toggle();
      this[UPDATE_BOTTOM]('0px');
      this[UPDATE_SHOW](false);
      this[CLEAR]();
    },
    handleClick() {
      this.$refs.confirm.toggle();
    },
    toggleMode() {
      this[UPDATE_MODE](this.mode < 2 ? this.mode + 1 : 0);
    },
    play(song) {
      if (!song.canplay || this.loading) return;
      this.choose({ mutation: CHOOSE, song })
        .then((res) => {
          if (!res) console.log('TT 没有播放版权');
        })
        .catch((e) => {
          console.log(e);
        });
    },
    remove(index) {
      const handle = () => {
        this[DELETE](index);
        this.$nextTick(() => {
          this.$refs.scrollView.refresh();
        });
        if (this.songs.length === 0) {
          this[UPDATE_BOTTOM]('0px');
          this[UPDATE_SHOW](false);
        }
      };

      if (this.loading) return;
      if (this.songs.length === 1 || this.index !== index) {
        handle();
        return;
      }
      this.toggle('next')
        .then(() => {
          if (this.index !== index) {
            handle();
            return;
          }
          this.clear();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    ...mapMutations('play', [DELETE, CLEAR, UPDATE_MODE]),
    ...mapMutations('playList', [UPDATE_SHOW]),
    ...mapMutations('global', [UPDATE_BOTTOM]),
    ...mapActions('play', ['choose', 'toggle']),
  },
};

</script>
<style scoped lang="scss">
.playList {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-background-d;

  >.container {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    padding: 0 30px 0 20px;

    >.header {
      display: flex;
      justify-content: space-between;
      height: 30px;
      line-height: 30px;
      padding: 20px 0 10px 0;
      font-size: $font-size-medium;

      >.mode {
        color: hsla(0, 0, 100%, .5);

        >.icon {
          font-size: 30px;
          color: $color-theme-d;
          vertical-align: middle;
          margin-right: 10px;
        }
      }

      >.clear {
        color: hsla(0, 0%, 100%, .3);
        width: 30px;
        height: 30px;
        margin-right: -8px;
        text-align: center;
      }
    }

    .list {
      color: hsla(0, 0, 255, .3);
      font-size: $font-size-medium;

      >.song {
        display: flex;
        align-items: center;
        height: 40px;

        >.name {
          flex: 1;
          @include no-wrap();

          &.active {
            color: $color-theme-d;
          }

          &.disable {
            text-decoration: line-through;
          }
        }

        >.icon {
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: $font-size-small;
          color: $color-theme;

          &:first-child {
            width: 12px;
            height: 12px;
            line-height: 12px;
            font-size: 12px;
            margin-right: 4px;
            color: $color-theme-d;
          }

          &:last-child {
            margin-right: -9px;
          }
        }
      }
    }

    >.add-btn {
      width: 116px;
      height: 12px;
      padding: 8px 16px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      border-radius: 100px;
      border: 1px solid hsla(0, 0, 100%, .5);
      color: hsla(0, 0, 100%, .5);
      font-size: $font-size-small;
      text-align: center;

      >.icon {
        margin-right: 5px;
      }
    }

    >.footer {
      height: 50px;
      line-height: 50px;
      margin: 0 -30px 0 -20px;
      background-color: #222;
      color: hsla(0, 0%, 100%, .5);
      font-size: $font-size-medium-x;
      text-align: center;
    }
  }
}

.playList-enter,
.playList-leave-to {
  opacity: 0;

  >.container {
    transform: translateY(100%);
  }
}

.playList-enter-active,
.playList-leave-active {
  transition: opacity .4s linear;

  >.container {
    transition: transform .4s ease;
  }
}

</style>
