<template>
  <div class="header">
    <span class="logo"></span>
    <span class="title">Chicken Music</span>
  </div>
</template>
<script>
export default {
  name: 'Header',
};

</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;

  >.logo {
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('./img/logo');
  }

  >.title {
    color: $color-theme;
    font-size: $font-size-large;
  }
}

</style>
