<template>
  <div class="normalPlayer">
    <div class="play-warpper">
      <PlayerHeader></PlayerHeader>
      <PlayerMiddle></PlayerMiddle>
      <PlayerBottom></PlayerBottom>
    </div>
    <div class="img-warpper">
      <img src="https://p2.music.126.net/qKmBySJpWPi2rt2ZRowOJg==/109951165608908515.jpg?param=170y170" alt="">
    </div>
  </div>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'

export default {
  name: 'NormalPlayer',
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayerBottom
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.normalPlayer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, #000, #fff, #000);

  .play-warpper {
    position: relative;
    z-index: 999;
  }

  .img-warpper {
    img {
      width: 100%;
      position: absolute;
      //top: 50%;
      left: 50%;
      transform: translate(-50%);
      filter: blur(10px);
    }
  }
}

</style>
