import { mapState, mapMutations } from 'vuex';
import { UPDATE_WAY } from '@/store/modules/play/mutation-types';
import Detail from '@/components/Detail/index.vue';

export default {
  data() {
    return {
      target: null,
    };
  },
  computed: {
    ...mapState('play', {
      way: state => state.way,
    }),
  },
  components: {
    Detail,
  },
  methods: {
    init(target) {
      this.target = { ...target };
      this.target.text = target[this.keys[1]];
      if (this.target.songs.length === 0) {
        this.getDetail(target[this.keys[0]])
          .then((data) => {
            this.target.songs = data;
          });
      }
      this.$nextTick(() => {
        this.$refs.detail.refresh();
      });
    },
    monitor(value) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        const target = this.find(value);
        if (target) this.init(target);
        else this.monitor(value);
      }, 20);
    },
    updateWay(value) {
      this[UPDATE_WAY](value);
    },
    ...mapMutations('play', [UPDATE_WAY]),
  },
  created() {
    const value = this.$router.history.current.params[this.keys[0]];
    const target = this.find(value);
    if (target) this.init(target);
    else this.monitor(value);
  },
};
