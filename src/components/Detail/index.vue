<template>
  <div class="detail" :style="{bottom}">
    <div class="header">
      <span class="icon" @click="back"><i class="icon-back"></i></span>
      <p class="name">{{ target.name }}</p>
    </div>
    <div class="avatar" :style="{backgroundImage: `url(${target.image})`}" ref="avatar">
      <div class="mask"></div>
      <div class="play" :class="loading ? 'disable' : ''" ref="play" @click="randomPlay">
        <span class="icon"><i class="icon-play"></i></span>
        <span>随机播放全部</span>
      </div>
    </div>
    <div class="content" ref="content">
      <ScrollView ref="scrollView" style="overflow: visible; position: absolute; bottom: 0;" :handleScroll="handleScroll" :dataSource="target.songs">
        <ul class="songList">
          <li class="song" v-for="song in target.songs" :key="song.songid" @click="gotoPlay(song)">
            <p class="primary" :class="song.canplay ? '' : 'disable'">{{ song.songname }}</p>
            <p class="secondary">
              <span v-for="name in song.authors" :key="name">{{name}}</span>·{{ song.albumname }}
            </p>
          </li>
        </ul>
      </ScrollView>
    </div>
    <Loading v-if="target.songs.length === 0" style="padding-top: 40px;" />
  </div>
</template>
<script>
import {
  mapActions,
  mapState,
  mapMutations,
} from 'vuex';
import Loading from '@/components/Loading/index.vue';
import ScrollView from '@/components/ScrollView/index.vue';
import { UPDATE_BOTTOM } from '@/store/modules/global/mutation-types';
import { ADD, UPDATE_MODE } from '@/store/modules/play/mutation-types';
import { RANDOM } from '@/config';

export default {
  name: 'Detail',
  props: {
    target: {
      type: Object,
      required: true,
    },
    back: {
      type: Function,
      required: true,
    },
  },
  components: {
    Loading,
    ScrollView,
  },
  methods: {
    randomPlay() {
      if (this.loading) return;
      if (this.mode !== RANDOM) this[UPDATE_MODE](RANDOM);
      this.random(this.target.songs.filter(song => song.canplay))
        .then((res) => {
          if (!res) {
            console.log('TT 没有版权');
            return;
          }
          if (this.bottom === '0px') this[UPDATE_BOTTOM]('60px');
        })
        .catch((e) => {
          console.log(e);
        });
    },
    gotoPlay(song) {
      if (!song.canplay || this.loading) return;
      this.choose({ mutation: ADD, song })
        .then((res) => {
          if (!res) {
            console.log('TT 没有版权');
            return;
          }
          if (this.bottom === '0px') this[UPDATE_BOTTOM]('60px');
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleScroll(pos) {
      const offsetHeight = this.$refs.avatar.offsetHeight;
      if (pos.y >= 0) {
        this.$refs.avatar.style.transform = `scale(${(offsetHeight + pos.y) / offsetHeight})`;
        return;
      }
      const top = offsetHeight + pos.y >= 40 ? offsetHeight + pos.y : 40;
      this.$refs.content.style.top = `${top}px`;
    },
    refresh() {
      this.$nextTick(() => {
        const offsetHeight = this.$refs.avatar.offsetHeight;
        this.$refs.content.style.top = `${offsetHeight}px`;
        this.$refs.scrollView.$el.style.height = `${document.documentElement.clientHeight - offsetHeight - parseInt(this.bottom, 10)}px`;
      });
    },
    ...mapActions('play', ['choose', 'random']),
    ...mapMutations('global', [UPDATE_BOTTOM]),
    ...mapMutations('play', [UPDATE_MODE]),
  },
  computed: {
    ...mapState('play', {
      songs: state => state.songs,
      loading: state => state.loading,
      mode: state => state.mode,
    }),
    ...mapState('global', {
      bottom: state => state.bottom,
    }),
  },
  watch: {
    bottom(value) {
      const offsetHeight = this.$refs.avatar.offsetHeight;
      this.$refs.scrollView.$el.style.height = `${document.documentElement.clientHeight - offsetHeight - parseInt(value, 10)}px`;
    },
  },
};

</script>
<style scoped lang="scss">
.detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $color-background;
  z-index: 999;

  >.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: $color-text;
    font-size: $font-size-large;
    z-index: 999;

    >.icon {
      position: absolute;
      top: 0;
      left: 6px;
      width: 40px;
      height: 22px;
      line-height: 22px;
      padding: 9px 0;
      font-size: $font-size-large-x;
      color: $color-theme;
    }

    >.name {
      width: 250px;
      margin: auto;
      @include no-wrap();
    }
  }

  >.avatar {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    transform-origin: center top;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;

    >.play {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 133px;
      height: 16px;
      padding: 7px 0;
      border: 1px solid $color-theme;
      border-radius: 100px;
      color: $color-theme;
      text-align: center;
      font-size: $font-size-small;
      line-height: 16px;

      &.disable {
        color: hsla(0, 0%, 100%, .3);
        border-color: hsla(0, 0%, 100%, .3);
      }

      >.icon {
        font-size: $font-size-medium-x;
        vertical-align: middle;
        margin-right: 6px;
      }
    }

    >.mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(7, 17, 27, .4);
    }
  }

  >.content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    .songList {
      padding: 20px 30px;
      font-size: $font-size-medium;
      background: #222;

      >.song {
        height: 44px;
        padding: 10px 0;

        >p {
          height: 20px;
          line-height: 20px;
          @include no-wrap();

          &.primary {
            color: #fff;

            &.disable {
              color: hsla(0, 0%, 100%, .3);
              text-decoration: line-through;
            }
          }

          &.secondary {
            margin-top: 4px;
            color: hsla(0, 0%, 100%, .3);

            >span {
              &::after {
                content: '/';
              }

              &:last-child::after {
                content: '';
              }
            }
          }
        }
      }
    }
  }
}

</style>
