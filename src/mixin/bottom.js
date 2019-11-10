import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('global', {
      bottom: state => state.bottom,
    }),
  },
  watch: {
    bottom() {
      this.refresh();
    },
  },
  methods: {
    refresh() {
      this.$refs.scrollView.refresh();
    },
  },
  activated() {
    // 当使用keep-alive缓存页面之后，那么当在其他页面修改bottom值的时候，虽然此页面也会刷新，那么当重新回到此页面时会发现滚动失效，原因可能是当你切换到其他页面，由于当前页面的dom的元素被卸载，导致更新的时候无法正确计算正确的值。所以需要在该页面重新激活时手动调用刷新。
    this.refresh();
  },
};
