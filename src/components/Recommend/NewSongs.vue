<template>
  <div>
    <div class="title"><h2>最新音乐</h2></div>
    <ul class="newSongs">
      <li class="item" v-for="value in newSongsData" :key="value.id">
        <div class="left">
          <h3>{{ value.name }}</h3>
          <p>{{ value.song.artists[0].name }} - {{ value.name }}</p>
        </div>
        <div class="right"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewSongs',
  props: {
    newSongsData: {
      type: Array,
      data: () => [],
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.title {
  @include font_size($font_large);
  @include bg_sub_color;
  @include font_color;
  border-bottom: 1px solid #ccc;
  height: 80px;

  h2 {
    line-height: 80px;
    margin-left: 10px;
    font-weight: bold;
  }
}

.newSongs {
  @include bg_sub_color;

  .item {
    width: 100%;
    height: 84px;
    margin-left: 10px;
    padding: 6px 0;
    @include font_color;
    position: relative;

    .left {
      float: left;

      h3 {
        @include font_size($font_large);
      }

      p {
        @include font_size($font_samll);
        margin-top: 6px;
      }
    }

    .right {
      float: right;
      margin-top: 17px;
      margin-right: 25px;
      width: 50px;
      height: 50px;
      //img {
      //  width: 50px;
      //  height: 50px;
      //}
      @include bg_image('../../assets/images/small_play')
    }
  }
}
</style>
