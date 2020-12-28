<template>
  <div class="header" @click="changeTheme()">
    <div class="header-left"></div>
    <div class="header-title">网易云音乐</div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      theme: ['theme-default', 'theme-green', 'theme-dark'],
      index: 0
    }
  },
  methods: {
    // 修改主题颜色
    changeTheme () {
      this.index++
      if (this.index >= this.theme.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/base";

.header {
  width: 100%;
  height: 100px;
  //调用封装的css方法引入背景颜色
  @include bg_color();
  display: flex;
  justify-content: space-between;

  .header-left, .header-right {
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }

  .header-title {
    text-align: center;
    line-height: 84px;
    color: #fff;
    @include font_size($font_large);
  }

  .header-left {
    @include bg_image('../assets/images/logo')
  }

  .header-right {
    @include bg_image('../assets/images/account')
  }
}
</style>
