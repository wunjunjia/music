import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('global', {
      bottom: state => state.bottom,
    }),
  },
  watch: {
    bottom() {
      this.$nextTick(() => {
        this.$refs.scrollView.refresh();
      });
    },
  },
};
