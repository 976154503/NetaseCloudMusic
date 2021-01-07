<template>
  <div class="playerBottom">
    <div class="playerProgress">
      <span>00:00</span>
      <div class="progress">
        <div class="progressLine">
          <div class="progressHot"></div>
        </div>
      </div>
      <span>00:00</span>
    </div>
    <div class="playerControl">
      <div class="mode"></div>
      <div class="prev"></div>
      <div class="pause"></div>
      <div class="next"></div>
      <div class="favorite"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerBottom'
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";
.playerBottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .playerProgress {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      @include font_size($font_samll);
      @include font_color
    }
    .progress {
      margin: 0 20px;
      width: 100%;
      background-color: #fff;
      height: 10px;
      position: relative;
      .progressLine {
        width: 40%;
        height: 100%;
        background-color: #ccc;

        .progressHot {
          position: absolute;
          left: 40%;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          @include bg_color
        }
      }
    }
  }
  .playerControl {
    width: 80%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 84px;
      height: 84px;
    }
    .mode {
      @include bg_image('../../assets/images/loop')
    }
    .prev {
      @include bg_image('../../assets/images/prev')
    }
    .pause {
      @include bg_image('../../assets/images/pause')
    }
    .next {
      @include bg_image('../../assets/images/next')
    }
    .favorite {
      @include bg_image('../../assets/images/favorite')
    }
  }
}
</style>
