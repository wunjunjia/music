<template>
  <div class="songList">
    <ScrollView ref="scrollView">
      <ul class="list">
        <li class="song" v-for="song in list" :key="song.songmid" @click="handleClick(song)">
          <p class="primary">{{ song.songname }}</p>
          <p class="secondary">
            <span :class="index < song.authors.length - 1 ? 'dividing' : ''" v-for="(name, index) in song.authors" :key="name">{{name}}</span>
            <span>·{{ song.albumname }}</span>
          </p>
        </li>
      </ul>
    </ScrollView>
    <div class="empty" v-if="list.length === 0">
      <div class="bg"></div>
      <p class="title">暂无相关数据</p>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapActions, mapMutations } from 'vuex';
import ScrollView from '@/components/ScrollView/index.vue';
import { ADD } from '@/store/modules/play/mutation-types';
import { UPDATE_BOTTOM } from '@/store/modules/global/mutation-types';

export default {
  name: 'SongList',
  props: {
    list: {
      type: Array,
      required: true,
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    ...mapState('play', {
      loading: state => state.loading,
    }),
    ...mapState('global', {
      bottom: state => state.bottom,
    }),
  },
  components: {
    ScrollView,
  },
  methods: {
    refresh() {
      this.$refs.scrollView.refresh();
    },
    handleClick(song) {
      if (this.loading) return;
      this.choose({ mutation: ADD, song })
        .then((res) => {
          if (!res) return;
          this.callback();
          if (this.bottom === '0px') this[UPDATE_BOTTOM]('60px');
        });
    },
    ...mapActions('play', ['choose']),
    ...mapMutations('global', [UPDATE_BOTTOM]),
  },
};

</script>
<style scoped lang="scss">
.songList {
  position: relative;
  width: 100%;
  height: 100%;

  .list {
    font-size: $font-size-medium;
    padding-bottom: 20px;

    >.song {
      height: 44px;
      padding: 10px 0;

      >p {
        height: 20px;
        line-height: 20px;
        @include no-wrap();

        &.primary {
          color: #fff;
        }

        &.secondary {
          margin-top: 4px;
          color: hsla(0, 0%, 100%, .3);

          >.dividing {

            &::after {
              content: '/';
            }
          }
        }
      }
    }
  }
}

</style>
