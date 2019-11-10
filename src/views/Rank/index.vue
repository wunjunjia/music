<template>
  <div class="rank">
    <ScrollView :dataSource="ranks" ref="scrollView">
      <ul class="list">
        <li class="rank" v-for="rank in ranks" :key="rank.id" @click="gotoDetail(rank.id)">
          <div class="avatar">
            <img v-lazy="rank.picUrl" alt="avatar">
          </div>
          <ul class="songs">
            <li class="song" v-for="(song, index) in rank.tops" :key="song.songname">
              <p>{{ index + 1 }}.{{ song.songname }}-{{ song.singername }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
    <Loading v-if="loading" />
    <transition name="detail">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Loading from '@/components/Loading/index.vue';
import ScrollView from '@/components/ScrollView/index.vue';
import mixin from '@/mixin';

const { bottom } = mixin;
export default {
  name: 'Rank',
  data() {
    return {
      loading: false,
    };
  },
  mixins: [bottom],
  computed: {
    ...mapState('rank', {
      ranks: state => state.ranks,
    }),
  },
  components: {
    Loading,
    ScrollView,
  },
  methods: {
    gotoDetail(id) {
      this.$router.history.push({
        path: `/rank/${id}`,
      });
    },
    ...mapActions('rank', ['getRankList']),
  },
  created() {
    this.loading = true;
    this.getRankList()
      .then(() => {
        this.loading = false;
      });
  },
};

</script>
<style scoped lang="scss">
.rank {
  width: 100%;
  height: 100%;

  .list {
    padding: 20px;

    >.rank {
      display: flex;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      >.avatar {
        width: 100px;
        min-width: 100px;
        height: 100px;
        font-size: 0;

        >img {
          width: 100%;
          height: 100%;
        }
      }

      >.songs {
        flex: 1;
        box-sizing: border-box;
        padding: 11px 20px;
        height: 100px;
        background: #333;
        color: hsla(0, 0%, 100%, .3);
        font-size: $font-size-small;
        overflow: hidden;

        >.song {
          line-height: 26px;

          >p {
            @include no-wrap();
          }
        }
      }
    }
  }
}

</style>
