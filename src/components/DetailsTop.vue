<template>
<div class="detailsTop">
  <img :src="path" alt="">
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
  }
}
</script>

<style scoped lang="scss">
.detailsTop {
  width: 100%;
  height: 500px;
  overflow: hidden;
  img {
    width: 100%;
  }
}

</style>
