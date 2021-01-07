<template>
  <ul class="detailBottom">
    <li class="liTop">
      <div class="icon"></div>
      <div class="title">全部播放</div>
    </li>
    <li class="item" v-for="value in playList" :key="value.id">
      <h3>{{ value.al.name }}</h3>
      <p>{{ value.ar[0].name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DetailsBottom',
  props: {
    playList: {
      type: Array,
      default: () => [],
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.detailBottom {
  width: 100%;
  li {
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    @include bg_sub_color;
  }

  .liTop {
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border: 1px solid #ccc;
    .icon {
      width: 60px;
      height: 60px;
      overflow: hidden;
      @include bg_image('../../assets/images/small_play')
    }

    .title {
      margin-left: 20px;
      @include font_color;
      @include font_size($font_large)
    }
  }

  .item {
    h3 {
      @include font_size($font_medium);
      @include font_color
    }
    p {
      margin-top: 10px;
      @include font_size($font_samll);
      @include font_color;
      opacity: 0.8;
    }
  }
}
</style>
