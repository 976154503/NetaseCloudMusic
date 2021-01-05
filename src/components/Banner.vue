<!--轮播图-->
<template>
  <div>
    <div class="banner">
      <!--  v-if  解决轮播到最后一页不自动播放    -->
      <swiper
        :options="swiperOptions"
        v-if="bannerData.length>0"
      >
        <swiper-slide class="item" v-for="value in bannerData" :key="value.bannerId">
          <a :href="value.url">
            <img :src="value.pic" alt="">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
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
  props: {
    bannerData: {
      type: Array,
      default: () => [],
      require: true
    }
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
        loop: true, // 自动轮播
        autoplay: { delay: 4000 },
        observer: true,
        observerParents: true,
        observeSlideChildren: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  .item {
    img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
<style lang="scss">
@import "../assets/css/base";
.banner {
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background: #fff;
    opacity:1;
  }
  .swiper-bullet-active {
    @include bg_color
  }
}

</style>
