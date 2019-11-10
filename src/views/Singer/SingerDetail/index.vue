<template>
  <Detail v-if="target" :target="target" ref="detail" :loadMore="loadMore" :more="more" />
</template>
<script type="text/javascript">
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
import mixin from '@/mixin';
import { UPDATE_SONGS_DATA } from '@/store/modules/singer/mutation-types';

const { detail } = mixin;
export default {
  name: 'SingerDetail',
  data() {
    return {
      keys: ['serial', 'name'],
      more: false,
    };
  },
  mixins: [detail],
  computed: {
    ...mapState('singer', {
      mores: state => state.mores,
    }),
    ...mapGetters('singer', ['find']),
  },
  watch: {
    mores(current) {
      const serial = this.$router.history.current.params.serial;
      this.more = current[serial];
    },
  },
  methods: {
    getDetail(serail) {
      return this.getSingerDetail(serail);
    },
    loadMore() {
      const serial = this.$router.history.current.params.serial;
      this[UPDATE_SONGS_DATA](serial);
      const singer = this.find(serial);
      this.target.songs = singer.songs;
    },
    ...mapActions('singer', ['getSingerDetail']),
    ...mapMutations('singer', [UPDATE_SONGS_DATA]),
  },
  created() {
    const serial = this.$router.history.current.params.serial;
    if (this.mores[serial]) this.more = this.mores[serial];
  },
};

</script>
