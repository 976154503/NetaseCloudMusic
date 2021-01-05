<template>
  <div class="detail">
    <SubHeader :title="playList.name"></SubHeader>
    <DetailsTop :path="playList.coverImgUrl" ref="img"></DetailsTop>
    <div class="bottom">
      <ScrollView ref="scrollView">
        <DetailsBottom :playList="playList.tracks"></DetailsBottom>
      </ScrollView>
    </div>

  </div>
</template>

<script>
import { getPlayList } from '../api/getData'
import SubHeader from '../components/SubHeader'
import DetailsTop from '../components/DetailsTop'
import DetailsBottom from '../components/DetailsBottom'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Details',
  components: {
    SubHeader,
    DetailsTop,
    DetailsBottom,
    ScrollView
  },
  data: function () {
    return {
      playList: {}
    }
  },
  created () {
    // 获取页面参数时 用$route 注意没有r
    getPlayList({ id: this.$route.params.id })
      .then((data) => {
        this.playList = data.playlist
      })
      .catch((err) => {
        console.log(err)
      })
  },
  mounted () {
    // 调用iscroll中封装好的方法获取滑动距离
    const defaultHeight = this.$refs.img.$el.offsetHeight
    console.log(defaultHeight)
    this.$refs.scrollView.scrolling((offsetY) => {
      if (offsetY > 0) {
        // 向下滑动
        const scale = 1 + offsetY / defaultHeight
        this.$refs.img.$el.style.transform = `scale(${scale})`
      } else {
        // 向上滑动
        const blur = 10 * Math.abs(offsetY) / defaultHeight
        this.$refs.img.$el.style.filter = `blur(${blur}px)`
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/base";

.detail {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include bg_sub_color;

  .bottom {
    position: fixed;
    top: 500px;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
