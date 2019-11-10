<template>
  <div class="scroll-container" ref="scroll-container">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';

export default {
  name: 'ScrollView',
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    handleScroll: {
      type: Function,
      default: () => {},
    },
    probeType: {
      type: Number,
      default: 3,
    },
    click: {
      type: Boolean,
      default: true,
    },
    bounce: {
      type: Object,
      default: () => ({
        top: true,
        bottom: true,
        left: true,
        right: true,
      }),
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    dataSource() {
      this.refresh();
    },
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    scrollToElement(el, duration = 0) {
      this.scroll.scrollToElement(el, duration);
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs['scroll-container'], {
        probeType: this.probeType,
        click: this.click,
        bounce: this.bounce,
      });
      this.scroll.on('scroll', this.handleScroll);
    },
  },
  mounted() {
    this.initScroll();
  },
  beforeDestroy() {
    this.scroll.destroy();
  },
};

</script>
<style scoped lang="scss">
.scroll-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

</style>
