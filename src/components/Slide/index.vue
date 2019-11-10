<template>
  <div class="slide-banner-scroll" ref="slide">
    <slot></slot>
    <div class="docs-wrapper">
      <span class="doc" v-for="index in length" :key="index" :class="{'active': currentPageIndex === index - 1}"></span>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';

function throttle(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export default {
  name: 'Slide',
  props: {
    length: {
      type: Number,
    },
  },
  data() {
    return {
      currentPageIndex: 0,
      reset: throttle(function () {
        clearTimeout(this.playTimer);
        const ul = this.$refs.slide.children[0];
        const lis = ul.children;
        ul.style.width = `${document.documentElement.clientWidth * lis.length}px`;
        for (let i = 0; i < lis.length; ++i) {
          lis[i].style.width = `${document.documentElement.clientWidth}px`;
        }
        this.refresh();
        this.autoGoNext();
      }, 100).bind(this),
    };
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        this.slide.refresh();
      });
    },
    initScroll() {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: true,
          threshold: 100,
        },
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: true,
        probeType: 2,
      });
      this.slide.on('scrollEnd', () => {
        this.autoGoNext();
      });
      this.slide.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer);
      });
      this.slide.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX;
      });
      window.addEventListener('resize', this.reset);
      this.autoGoNext();
    },
    autoGoNext() {
      this.playTimer = setTimeout(() => {
        clearTimeout(this.playTimer);
        this.slide.next();
      }, 1000);
    },
  },
  mounted() {
    this.initScroll();
  },
  activated() {
    this.$nextTick(() => {
      this.refresh();
      this.autoGoNext();
    });
  },
  beforeDestroy() {
    clearTimeout(this.playTimer);
    this.slide.destroy();
    window.removeEventListener('resize', this.reset);
  },
};

</script>
<style scoped lang="scss">
.slide-banner-scroll {
  position: relative;
  overflow: hidden;

  >.docs-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);

    >.doc {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;

      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}

</style>
