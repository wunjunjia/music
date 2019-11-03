<template>
  <div class="scroll-container" ref="scroll-container">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';

export default {
  name: 'ScrollView',
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
      // require: true,
    },
  },
  watch: {
    dataSource() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
    scrollToElement(el, duration = 0) {
      this.scroll.scrollToElement(el, duration);
    },
    monitor() {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        if (this.$refs['scroll-container'].children.length === 0) this.monitor();
        else {
          this.scroll = new BScroll(this.$refs['scroll-container'], {
            probeType: this.probeType,
            click: this.click,
            bounce: this.bounce,
          });
          this.scroll.on('scroll', this.handleScroll);
        }
      }, 20);
    },
  },
  mounted() {
    this.monitor();
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
