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
import { UPDATE_SONGS_DATA } from '@/store/modules/cd/mutation-types';

const { detail } = mixin;
export default {
  name: 'CdDetail',
  data() {
    return {
      keys: ['id', 'desc'],
      more: false,
    };
  },
  mixins: [detail],
  computed: {
    ...mapState('cd', {
      mores: state => state.mores,
    }),
    ...mapGetters('cd', ['find']),
  },
  watch: {
    mores(current) {
      const id = this.$router.history.current.params.id;
      this.more = current[id];
    },
  },
  methods: {
    getDetail(id) {
      return this.getCdDetail(id);
    },
    loadMore() {
      const id = this.$router.history.current.params.id;
      this[UPDATE_SONGS_DATA](id);
      const cd = this.find(id);
      this.target.songs = cd.songs;
    },
    ...mapActions('cd', ['getCdDetail']),
    ...mapMutations('cd', [UPDATE_SONGS_DATA]),
  },
  created() {
    const id = this.$router.history.current.params.id;
    if (this.mores[id]) this.more = this.mores[id];
  },
};

</script>
