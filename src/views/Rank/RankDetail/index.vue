<template>
  <Detail v-if="target" :target="target" ref="detail" :loadMore="loadMore" :more="more" >
    <template v-slot="{ index }">
      <div class="rank" :class="getIcon(index)">{{ index + 1 }}</div>
    </template>
  </Detail>
</template>
<script type="text/javascript">
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
import mixin from '@/mixin';
import logo from '@/assets/logo.png';
import { UPDATE_SONGS_DATA } from '@/store/modules/rank/mutation-types';

const { detail } = mixin;
export default {
  name: 'RankDetail',
  data() {
    return {
      keys: ['id', 'topTitle'],
      more: false,
    };
  },
  mixins: [detail],
  computed: {
    ...mapState('rank', {
      mores: state => state.mores,
    }),
    ...mapGetters('rank', ['find']),
  },
  watch: {
    mores(current) {
      const id = this.$router.history.current.params.id;
      this.more = current[id];
    },
  },
  methods: {
    getIcon(index) {
      const icons = ['gold', 'silver', 'copper'];
      return index < 3 ? `icon ${icons[index]}` : '';
    },
    getDetail(id) {
      return this.getRankDetail(id);
    },
    loadMore() {
      const id = this.$router.history.current.params.id;
      this[UPDATE_SONGS_DATA](id);
      const rank = this.find(id);
      this.target.songs = rank.songs;
    },
    process() {
      if (this.target.songs.length === 0) this.target.image = logo;
      else this.target.image = this.target.songs[0].image;
    },
    ...mapActions('rank', ['getRankDetail']),
    ...mapMutations('rank', [UPDATE_SONGS_DATA]),
  },
  created() {
    const id = this.$router.history.current.params.id;
    if (this.mores[id]) this.more = this.mores[id];
  },
};

</script>
<style scoped lang="scss">
.rank {
  color: $color-theme;
  font-size: $font-size-large;
  text-align: center;
  width: 25px;
  height: 24px;
  line-height: 24px;
  margin-right: 30px;

  &.icon {
    color: transparent;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.gold {
    background-image: url('./img/gold.png');
  }

  &.silver {
    background-image: url('./img/silver.png');
  }

  &.copper {
    background-image: url('./img/copper.png');
  }
}

</style>
