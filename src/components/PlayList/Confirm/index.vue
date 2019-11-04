<template>
  <transition name="confirm">
    <div class="confirm" v-if="show">
      <div class="container">
        <h1 class="title">是否清空播放列表</h1>
        <div class="btn">
          <span @click="toggle">取消</span>
          <span @click="_confirm">清空</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Confirm',
  data() {
    return {
      show: false,
    };
  },
  props: {
    confirm: {
      type: Function,
      defalut: () => {},
    },
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    _confirm() {
      this.toggle();
      this.confirm();
    },
  },
};

</script>
<style lang="scss" scoped>
.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background-d;

  >.container {
    width: 271px;
    height: 103px;
    background-color: #333;
    border-radius: 13px;
    font-size: $font-size-large;

    >.title {
      line-height: 60px;
      text-align: center;
      color: hsla(0, 0%, 100%, .5);
      border-bottom: 1px solid rgba(0, 0, 0, .3);
    }

    >.btn {
      color: hsla(0, 0%, 100%, .3);

      >span {
        display: inline-block;
        width: 135px;
        text-align: center;
        line-height: 42px;

        &:first-child {
          border-right: 1px solid rgba(0, 0, 0, .3);
        }
      }
    }
  }
}

.confirm-enter,
.confirm-leave-to {
  opacity: 0;

  >.container {
    transform: scale(1.2);
  }
}

.confirm-enter-active,
.confirm-leave-active {
  transition: opacity .4s ease;

  >.container {
    transition: transform .4s ease;
  }
}

</style>
