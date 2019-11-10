<template>
  <transition name="playList" @enter="enter">
    <div class="playList" v-show="show" @click.self="close">
      <div class="container">
        <div class="header">
          <div class="mode">
            <span class="icon"><i :class="icon" @click="toggleMode"></i></span>
            <span>{{ text }}</span>
          </div>
          <span class="clear" @click="handleClick"><i class="icon icon-clear"></i></span>
        </div>
        <ScrollView style="max-height: 240px;" ref="scrollView" :dataSource="songs">
          <ul class="list">
            <li class="song" v-for="(song, i) in songs" :key="song.songmid" @click="play(song)" ref="song" :data-songmid="song.songmid">
              <span class="icon" :style="{ visibility: i === index ? 'visible' : 'hidden' }"><i class="icon-play"></i></span>
              <p class="name" :class="{ active: i === index, disable: !song.canplay }">{{song.songname}}</p>
              <span class="icon" :class="{love: song.love}" @click.stop.prevent="toggleLove(song)">
                <i :class="song.love ? 'icon-favorite' : 'icon-not-favorite'"></i>
              </span>
              <span class="icon" @click.stop.prevent="remove(i)"><i class="icon-delete"></i></span>
            </li>
          </ul>
        </ScrollView>
        <div class="add-btn" @click="toggleShow">
          <span class="icon"><i class="icon-add"></i></span>
          <span>添加歌曲到队列</span>
        </div>
        <div class="footer" @click="close">关闭</div>
      </div>
      <ChooseSong ref="choose-song" />
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
  UPDATE_SONG_LOVE,
} from '@/store/modules/play/mutation-types';
import { UPDATE_BOTTOM } from '@/store/modules/global/mutation-types';
import { UPDATE_CONFIRM_SHOW, UPDATE_CONFIRM_TITLE, UPDATE_CONFIRM_EXECUTE } from '@/store/modules/confirm/mutation-types';
import { LOOP, RANDOM } from '@/config';
import ScrollView from '@/components/ScrollView/index.vue';
import ChooseSong from '@/components/ChooseSong/index.vue';

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
    ChooseSong,
  },
  methods: {
    enter() {
      // 之所以需要这里手动刷新是因为当playList的display是hidden的时候，是无法取到元素的样式值的，那么这样的话BScroll自然无法正常计算，导致无法滚动。
      // 这条语句注意不要放到this.$nextTick里面，意味这个refresh方法内部的执行就是在nextTick中执行，如果放到下面的nextTick里面，会导致刷新的时机比滚动到指定位置的时机晚，那这样肯定是不会正常滚动到指定位置的。
      this.$refs.scrollView.refresh();
      this.$nextTick(() => {
        // 由于songs是动态的，而this.refs.song取到的数组顺序不一定与songs数组顺序一致， 所以依赖索引取值是不可靠的。
        const songs = this.$refs.song;
        const song = songs.find(song => song.dataset.songmid === this.song.songmid);
        this.$refs.scrollView.scrollToElement(song);
      });
    },
    close() {
      this[UPDATE_SHOW](false);
    },
    confirm() {
      this[UPDATE_BOTTOM]('0px');
      this[UPDATE_SHOW](false);
      this[CLEAR]();
    },
    handleClick() {
      this[UPDATE_CONFIRM_SHOW](true);
      this[UPDATE_CONFIRM_TITLE]('是否清空播放列表');
      this[UPDATE_CONFIRM_EXECUTE](this.confirm);
    },
    toggleShow() {
      this.$refs['choose-song'].toggleShow();
    },
    toggleMode() {
      this[UPDATE_MODE](this.mode < 2 ? this.mode + 1 : 0);
    },
    toggleLove(song) {
      this[UPDATE_SONG_LOVE](song);
    },
    play(song) {
      if (!song.canplay || this.loading) return;
      this.choose({ mutation: CHOOSE, song });
    },
    remove(index) {
      const handle = () => {
        this[DELETE](index);
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
        });
    },
    ...mapMutations('play', [DELETE, CLEAR, UPDATE_MODE, UPDATE_SONG_LOVE]),
    ...mapMutations('playList', [UPDATE_SHOW]),
    ...mapMutations('global', [UPDATE_BOTTOM]),
    ...mapMutations('confirm', [UPDATE_CONFIRM_SHOW, UPDATE_CONFIRM_TITLE, UPDATE_CONFIRM_EXECUTE]),
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

          &.love {
            color: $color-sub-theme;
          }

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
