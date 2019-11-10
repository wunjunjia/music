<template>
  <div class="header">
    <span class="logo"></span>
    <span class="title">Chicken Music</span>
    <span class="icon" @click="gotoUserCenter"><i class="icon-mine"></i></span>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    gotoUserCenter() {
      this.$router.history.push({
        path: '/user',
      });
    },
  },
};

</script>
<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  color: $color-theme;

  >.logo {
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('./img/logo');
  }

  >.title {
    font-size: $font-size-large;
  }

  >.icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;
  }
}

</style>
