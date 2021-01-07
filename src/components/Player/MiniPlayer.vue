<template>
  <div class="miniPlayer">
    <div class="player-left">
      <img src="https://p2.music.126.net/qKmBySJpWPi2rt2ZRowOJg==/109951165608908515.jpg?param=170y170" alt="">
      <div class="player-info">
        <h3>歌名</h3>
        <p>歌手</p>
      </div>
    </div>
    <div class="player-right">
      <div class="play"></div>
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniPlayer'
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.miniPlayer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include bg_color;

  .player-left {
    display: flex;
    align-items: center;
    img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      margin-left: 30px;
    }

    .player-info {
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      @include font_size($font_medium);
      @include font_color
    }
  }
  .player-right {
    display: flex;
    align-items: center;
    .play {
      width: 84px;
      height: 84px;
      @include bg_image('../../assets/images/play')
    }
    .list {
      width: 120px;
      height: 120px;
      @include bg_image('../../assets/images/list')
    }
  }
}
</style>
