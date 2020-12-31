<template>
  <div>
    <div>
      <swiper
        :options="swiperOptions"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
      </swiper>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
/*
* Swiper6在vue中的配置详见官方文档
* 但是安装文档的方法会报错！！！
* 需要安装vue-awesome-swiper
* 命令 npm install swiper vue-awesome-swiper
* 然后从vue-awesome-swiper中导入Swiper,SwiperSlide
* 按照官方文档的要求添加需要的组件如分页器
* 否则会报<swiper>标签未定义的错！！！
*
* 决定用回swiper 5.3.7版本
* */

import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/css/swiper.css'

export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          // 分页可以点击
          clickable: true,
          // 激活的分页小圆点样式
          bulletActiveClass: 'swiper-bullet-active'
        },
        loop: true,
        autoplay: { delay: 4000 }
      }
    }
  }
}
</script>

<style scoped>

</style>
