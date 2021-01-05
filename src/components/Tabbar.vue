<!--顶部导航-->
<template>
  <div class="tabber">
    <router-link tag="div" class="item" to="/recommend"><span>推荐音乐</span></router-link>
    <router-link tag="div" class="item" to="/singer"><span>歌手</span></router-link>
    <router-link tag="div" class="item" to="/rank"><span>排行</span></router-link>
    <router-link tag="div" class="item" to="/search"><span>搜索</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabber'
}
</script>

<style scoped lang="scss">
@import "../assets/css/base";

.tabber {
  display: flex;
  width: 100%;
  @include bg_sub_color();
  height: 84px;
  justify-content: space-around;
  .item {
    span {
      line-height: 84px;
      @include font_size($font_medium);
      @include font_color;
    }
    //& 为scss语法 父类选择器  scss语法api https://www.sass.hk/guide/
    &.router-link-active {
      span {
        @include font_active_color;
      }
      border-bottom: 5px solid #000;
      @include border_color();
    }
  }
}
</style>
