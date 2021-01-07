<template>
<div class="detailsTop">
  <img :src="path" alt="">
  <div class="mask" ref="mask"></div>
</div>
</template>

<script>
export default {
  name: 'DetailsTop',
  props: {
    path: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    // 暴露改变透明度方法提供父级组件调用
    changeOpacity (opacity) {
      this.$refs.mask.style.opacity = opacity
    }
  }
}
</script>

<style scoped lang="scss">
.detailsTop {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    top: 0;
    left: 0;
    opacity: 0;
  }
}

</style>
