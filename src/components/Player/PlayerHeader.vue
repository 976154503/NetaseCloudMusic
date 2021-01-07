<template>
  <div class="playHeader">
    <div class="header-left"></div>
    <div class="header-title">
      <h3>歌名</h3>
      <p>歌手</p>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayerHeader'
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.playHeader {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .header-left, .header-right {
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }

  .header-title {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @include font_size($font_medium);
    color: #fff;
  }

  .header-left {
    @include bg_image('../../assets/images/down')
  }
}
</style>
