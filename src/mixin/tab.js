export default {
  data() {
    return {
      active: false,
      startX: 0,
      startY: 0,
      index: 0,
    };
  },
  computed: {
    width() {
      return this.$refs.container.offsetWidth / this.total;
    },
  },
  methods: {
    activeTip() {
      this.active = true;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.active = false;
      }, 1500);
    },
    toggleIndex(index) {
      this.index = index;
      this.$refs.container.style.transform = `translateX(${-this.index * this.width}px)`;
    },
    touchStart(el) {
      this.startX = el.targetTouches[0].clientX;
      this.startY = el.targetTouches[0].clientY;
      this.$refs.container.style.transitionDuration = '0s';
    },
    touchMove(el) {
      const distanceX = el.targetTouches[0].clientX - this.startX;
      const distanceY = el.targetTouches[0].clientY - this.startY;
      if (Math.abs(distanceY) >= Math.abs(distanceX)) return;
      if ((distanceX < 0 && this.index === this.total - 1) || (distanceX > 0 && this.index === 0)) return;
      this.$refs.container.style.transform = `translateX(${-this.index * this.width + distanceX}px)`;
    },
    touchEnd(el) {
      this.$refs.container.style.transitionDuration = '.4s';
      const distanceX = el.changedTouches[0].clientX - this.startX;
      if (Math.abs(distanceX) < 50) {
        this.$refs.container.style.transform = `translateX(${-this.index * this.width}px)`;
        return;
      }
      if ((distanceX < 0 && this.index === this.total - 1) || (distanceX > 0 && this.index === 0)) return;
      this.index = distanceX > 50 ? this.index - 1 : this.index + 1;
      this.$refs.container.style.transform = `translateX(${-this.index * this.width}px)`;
    },
  },
};
