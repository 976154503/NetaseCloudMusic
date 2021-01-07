<template>
  <swiper
    :options="swiperOptions"
    class="banner"
  >
    <swiper-slide class="cd">
      <div class="cd-warpper">
        <img src="https://p2.music.126.net/qKmBySJpWPi2rt2ZRowOJg==/109951165608908515.jpg?param=170y170" alt="">
      </div>
      <p>歌词123345歌词123341233412334</p>
    </swiper-slide>
    <swiper-slide class="lyric">
      <ScrollView>
        <ul>
          <li>我是第1个</li>
          <li>我是第2个</li>
          <li>我是第3个</li>
          <li>我是第4个</li>
          <li>我是第5个</li>
          <li>我是第6个</li>
          <li>我是第7个</li>
          <li>我是第8个</li>
          <li>我是第9个</li>
          <li>我是第10个</li>
          <li>我是第11个</li>
          <li>我是第12个</li>
          <li>我是第13个</li>
          <li>我是第14个</li>
          <li>我是第15个</li>
          <li>我是第16个</li>
          <li>我是第17个</li>
          <li>我是第18个</li>
          <li>我是第19个</li>
          <li>我是第20个</li>
          <li>我是第21个</li>
          <li>我是第22个</li>
          <li>我是第23个</li>
          <li>我是第24个</li>
          <li>我是第25个</li>
          <li>我是第26个</li>
          <li>我是第27个</li>
          <li>我是第28个</li>
          <li>我是第29个</li>
          <li>我是第30个</li>
          <li>我是第31个</li>
          <li>我是第32个</li>
          <li>我是第33个</li>
          <li>我是第34个</li>
          <li>我是第35个</li>
          <li>我是第36个</li>
          <li>我是第37个</li>
          <li>我是第38个</li>
          <li>我是第39个</li>
          <li>我是第40个</li>
          <li>我是第41个</li>
          <li>我是第42个</li>
          <li>我是第43个</li>
          <li>我是第44个</li>
          <li>我是第45个</li>
          <li>我是第46个</li>
          <li>我是第47个</li>
          <li>我是第48个</li>
          <li>我是第49个</li>
          <li>我是第50个</li>
        </ul>
      </ScrollView>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/css/swiper.css'

import ScrollView from '../ScrollView'

export default {
  name: 'PlayerMiddle',
  components: {
    Swiper,
    SwiperSlide,
    ScrollView
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          // 分页可以点击
          clickable: true,
          // 激活的分页小圆点样式
          bulletActiveClass: 'my-bullet-active',
          // 添加需要修改的样式类名
          bulletClass: 'my-bullet'
        },
        observer: true,
        observerParents: true,
        observeSlideChildren: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base";

.banner {
  position: fixed;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 200px;

  .cd {
    text-align: center;

    .cd-warpper {
      margin: 0 auto;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      border: 30px solid #fff;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      margin-top: 150px;
      color: #fff;
      @include font_size($font_medium)
    }
  }

  .lyric {
    text-align: center;

    li {
      @include font_color;
      @include font_size($font_medium);
      margin: 10px 0;

      &:last-of-type {
        padding-bottom: 100px;
      }
    }
  }

}
</style>
<style lang="scss">
@import "../../assets/css/base";
.my-bullet {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 20px;
}

.my-bullet-active {
  width: 60px;
  border-radius: 10px;
  @include bg_color
}
</style>
