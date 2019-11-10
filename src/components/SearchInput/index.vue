<template>
  <div class="serach-input" :style="{zIndex: songs.length === 0 ? 0 : 999}">
    <div class="input-wrapper">
      <span class="icon"><i class="icon-search"></i></span>
      <input class="input" type="text" placeholder="搜索歌曲、歌手" v-model="search">
      <span v-show="search !== ''" class="icon close" @click="clear">
        <i class="icon-dismiss"></i>
      </span>
    </div>
    <div class="song-wrapper">
      <ScrollView ref="scrollView" :dataSource="songs" :handleScroll="handleScroll">
        <ul class="list" ref="list">
          <li class="item" v-for="(song, index) in songs" :key="index" @click="handleClick(song)" ref="song">
            <p :class="song.canplay ? '' : 'disable'">
              <span class="icon"><i class="icon-music"></i></span>
              <span>{{ song.songname }}</span>-<span class="name" v-for="name in song.authors" :key="name">{{ name }}</span>
            </p>
          </li>
        </ul>
      </ScrollView>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';
import { mapState, mapActions, mapMutations } from 'vuex';
import ScrollView from '@/components/ScrollView/index.vue';
import { SUCCESS } from '@/config';
import Song from '@/model/song';
import { ADD } from '@/store/modules/play/mutation-types';
import { UPDATE_BOTTOM, UPDATE_SEARCH_HISTORY } from '@/store/modules/global/mutation-types';
import mixin from '@/mixin';

const { bottom } = mixin;
const CancelToken = axios.CancelToken;
export default {
  name: 'SearchInput',
  data() {
    return {
      search: '',
      timer: null,
      songs: [],
      cancel: null,
      flag: false,
      count: 20,
      pageIndex: 1,
      more: true,
    };
  },
  props: {
    callback: {
      type: Function,
      default: () => {},
    },
  },
  mixins: [bottom],
  watch: {
    search(current) {
      this.pageIndex = 1;
      this.more = true;
      // 在发送下一次请求之前，如果之前的请求还没有响应那么直接中断掉
      if (this.cancel) this.cancel('中断请求！');
      if (this.timer) clearTimeout(this.timer);
      const value = current.trim();
      if (value === '') {
        this.songs = [];
        return;
      }
      this.timer = setTimeout(() => {
        axios.get('/api/search', {
            params: { search: value, count: this.count, pageIndex: this.pageIndex },
            cancelToken: new CancelToken((c) => {
              this.cancel = c;
            }),
          })
          .then((res) => {
            if (res.data.code === SUCCESS) {
              const { song } = res.data.data;
              this.songs = song.list.map(song => new Song({
                albummid: song.albummid,
                albumname: song.albumname,
                songmid: song.songmid,
                interval: song.interval,
                songname: song.songname,
                authors: song.singer.map(singer => singer.name),
              }));
              if ((Math.ceil(song.totalnum / this.count)) === this.pageIndex) this.more = false;
              else this.pageIndex = this.pageIndex + 1;
            }
          });
          // .catch((e) => {
          //   if (axios.isCancel(e)) {
          //     console.log('Request canceled', e.message);
          //   } else {
          //     console.log(e);
          //   }
          // });
      }, 300);
    },
  },
  computed: {
    ...mapState('global', {
      searchHistory: state => state.searchHistory,
    }),
    ...mapState('play', {
      loading: state => state.loading,
    }),
  },
  components: {
    ScrollView,
  },
  methods: {
    clear() {
      this.search = '';
    },
    handleClick(song) {
      if (!song.canplay || this.loading) return;
      this.choose({ mutation: ADD, song })
        .then((res) => {
          if (!res) return;
          this.callback();
          if (this.bottom === '0px') this[UPDATE_BOTTOM]('60px');
          if (this.searchHistory.findIndex(item => item === song.songname) === -1) {
            this[UPDATE_SEARCH_HISTORY](song.songname);
          }
        });
    },
    setSearch(value) {
      this.search = value;
    },
    handleScroll(pos) {
      if (this.more && this.$refs.list.offsetHeight + pos.y <= this.$refs.scrollView.$el.offsetHeight + 80 && !this.flag) {
        this.flag = true;
        axios.get('/api/search', {
            params: {
              search: this.search.trim(),
              count: this.count,
              pageIndex: this.pageIndex,
            },
          })
          .then((res) => {
            if (res.data.code === SUCCESS) {
              const { song } = res.data.data;
              if (Math.ceil(song.totalnum / this.count) === this.pageIndex) this.more = false;
              else this.pageIndex = this.pageIndex + 1;
              const songs = song.list.map(song => new Song({
                albummid: song.albummid,
                albumname: song.albumname,
                songmid: song.songmid,
                interval: song.interval,
                songname: song.songname,
                authors: song.singer.map(singer => singer.name),
              }));
              this.songs = [...this.songs, ...songs];
              this.$nextTick(() => {
                this.$refs.scrollView.refresh();
                this.flag = false;
              });
              return;
            }
            this.flag = false;
          })
          .catch(() => {
            this.flag = false;
          });
      }
    },
    ...mapActions('play', ['choose']),
    ...mapMutations('global', [UPDATE_BOTTOM, UPDATE_SEARCH_HISTORY]),
  },
};

</script>
<style scoped lang="scss">
.serach-input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 20px;
  background-color: $color-background;

  >.input-wrapper {
    position: relative;
    display: flex;
    padding: 0 6px;
    height: 40px;
    min-height: 40px;
    margin: 0 20px;
    background: #333;
    border-radius: 6px;
    align-items: center;
    justify-content: space-between;

    >.icon {
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 24px;
      text-align: center;
      color: hsla(0, 0%, 100%, .3);

      &.close {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        line-height: 16px;
        font-size: $font-size-medium-x;
      }
    }

    >.input {
      flex: 1;
      background-color: #333;
      padding: 0 5px;
      font-size: $font-size-medium;
      outline: none;
      color: #fff;
    }
  }

  >.song-wrapper {
    position: absolute;
    top: 90px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 30px;

    .list {
      >.item {
        height: 18px;
        line-height: 18px;
        padding-bottom: 20px;
        color: hsla(0, 0%, 100%, .3);
        font-size: $font-size-medium;

        >p {
          @include no-wrap();

          &.disable {
            color: hsla(0, 0%, 100%, .3);
            text-decoration: line-through;
          }

          >.icon {
            display: inline-block;
            width: 30px;
            height: 18px;
            line-height: 18px;
            vertical-align: middle;
          }

          >.name {
            &::after {
              content: '/',
            }

            &:last-child {
              &::after {
                content: '',
              }
            }
          }
        }
      }
    }
  }
}

</style>
