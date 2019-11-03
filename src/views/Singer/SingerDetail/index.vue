<template>
  <Detail v-if="singer" :target="singer" :back="back" ref="detail" />
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex';
import Detail from '@/components/Detail/index.vue';

export default {
  name: 'SingerDetail',
  data() {
    return {
      singer: null,
    };
  },
  computed: {
    ...mapGetters('singer', ['find']),
  },
  components: {
    Detail,
  },
  methods: {
    back() {
      this.$router.history.push({
        path: '/singer',
      });
    },
    monitor(serial) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        const singer = this.find(serial);
        if (singer) {
          this.init(singer);
        } else this.monitor(serial);
      }, 20);
    },
    init(singer) {
      this.singer = singer;
      if (singer.songs.length === 0) this.getSingerDetail(singer.serial);
      this.$nextTick(() => {
        this.$refs.detail.refresh();
      });
    },
    ...mapActions('singer', ['getSingerDetail']),
  },
  created() {
    const serial = this.$router.history.current.params.serial;
    const singer = this.find(serial);
    if (!singer) this.monitor(serial);
    else this.init(singer);
  },
};

</script>
