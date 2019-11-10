import Detail from '@/components/Detail/index.vue';

export default {
  data() {
    return {
      target: null,
    };
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
          .then(() => {
            this.target.songs = target.songs;
            this.process();
          });
      }
      this.process();
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
    // 用于需要特殊处理target的组件
    process() {},
  },
  created() {
    const value = this.$router.history.current.params[this.keys[0]];
    const target = this.find(value);
    if (target) this.init(target);
    else this.monitor(value);
  },
};
