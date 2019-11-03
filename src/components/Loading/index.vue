<template>
  <div class="loading">
    <img src="./img/loading.gif" alt="loading">
    <p class="title">加载中...</p>
  </div>
</template>
<script>
export default {
  name: 'Loading',
};

</script>
<style scoped lang="scss">
.loading {
  text-align: center;
  font-size: 0;

  >img {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }

  >.title {
    font-size: $font-size-small;
  }
}

</style>
