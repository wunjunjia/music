<template>
  <transition name="tip">
    <div class="tip" v-show="active">
      <span class="icon"><i class="icon-ok"></i></span>
      <span>已添加到播放列表</span>
    </div>
  </transition>
</template>
<script type="text/javascript">
export default {
  name: 'Tip',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
};

</script>
<style scoped lang="scss">
.tip {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium-x;
  text-align: center;
  background-color: $color-dialog-background;

  >.icon {
    color: $color-theme;
    margin-right: 4px;
  }
}

.tip-enter,
.tip-leave-to {
  transform: translateY(-100%);
}

.tip-enter-active,
.tip-leave-active {
  transition: transform .4s ease;
}

.tip-enter-to,
.tip-leave {
  transform: translateY(0);
}

</style>
