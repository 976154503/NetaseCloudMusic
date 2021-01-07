<template>
  <div class="listPlayer">
    <div class="list-top">
      <div class="list-top-left">
        <div class="model"></div>
        <div class="model-title">顺序播放</div>
      </div>
      <div class="list-top-right"></div>
    </div>
    <div class="list-middle">
      <ScrollView>
        <ul>
          <li class="item">
            <div class="item-left">
              <div class="play"></div>
              <div class="songsName">歌名</div>
            </div>
            <div class="item-right">
              <div class="favorite"></div>
              <div class="close"></div>
            </div>
          </li>
          <li class="item">
            <div class="item-left">
              <div class="play"></div>
              <div class="songsName">歌名</div>
            </div>
            <div class="item-right">
              <div class="favorite"></div>
              <div class="close"></div>
            </div>
          </li>
          <li class="item">
            <div class="item-left">
              <div class="play"></div>
              <div class="songsName">歌名</div>
            </div>
            <div class="item-right">
              <div class="favorite"></div>
              <div class="close"></div>
            </div>
          </li>
        </ul>
      </ScrollView>
    </div>
    <div class="list-bottom">关闭</div>
  </div>
</template>

<script>
import ScrollView from '../ScrollView'

export default {
  name: 'ListPlayer',
  components: {
    ScrollView
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.listPlayer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  @include bg_sub_color;
  @include font_color;
  @include font_size($font_medium);

  .list-top {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;

    .list-top-left {
      display: flex;
      align-items: center;

      .model {
        margin: 0 20px;
        height: 54px;
        width: 54px;
        @include bg_image('../../assets/images/small_loop')
      }
    }

    .list-top-right {
      height: 82px;
      width: 82px;
      @include bg_image('../../assets/images/small_del')
    }
  }

  .list-middle {
    .item {
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-top: 1px solid #ccc;
      margin: 0 0 -1px 0;

      .item-left {
        display: flex;
        align-items: center;

        .play {
          margin: 0 20px;
          height: 54px;
          width: 54px;
          @include bg_image('../../assets/images/small_play')
        }
      }

      .item-right {
        display: flex;
        align-items: center;

        .favorite {
          margin: 0 20px;
          height: 54px;
          width: 54px;
          @include bg_image('../../assets/images/small_favorite')
        }

        .close {
          margin: 0 20px;
          height: 54px;
          width: 54px;
          @include bg_image('../../assets/images/small_close')
        }
      }
    }
  }

  .list-bottom {
    width: 100%;
    height: 100px;
    text-align: center;
    @include bg_color;
    line-height: 100px;
    color: #fff;
    @include font_size($font_medium)
  }
}
</style>
